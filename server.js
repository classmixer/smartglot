import express from 'express';
import path from 'path';
import { Client } from '@elastic/elasticsearch';
import 'dotenv/config'; // Use this for dotenv >= 10
import { fileURLToPath } from 'url'; // For __dirname replacement
import process from 'process'; // Import process explicitly

// __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json()); // Add this line to parse JSON request bodies
const port = process.env.PORT || 8080;

// Elasticsearch 클라이언트 초기화
let esClient;
if (process.env.ES_URL && process.env.ES_API_KEY) {
  try {
    esClient = new Client({
      node: process.env.ES_URL,
      auth: {
        apiKey: process.env.ES_API_KEY,
      },
    });
    console.log('Elasticsearch client initialized successfully.');
  } catch (error) {
    console.error('Failed to initialize Elasticsearch client:', error);
  }
} else {
  console.warn(
    'Elasticsearch environment variables (ES_URL, ES_API_KEY) not set. Search functionality will be unavailable.',
  );
}

// Basic English stop words list (customize as needed)
const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'but',
  'by',
  'for',
  'if',
  'in',
  'into',
  'is',
  'it',
  'no',
  'not',
  'of',
  'on',
  'or',
  'such',
  'that',
  'the',
  'their',
  'then',
  'there',
  'these',
  'they',
  'this',
  'to',
  'was',
  'will',
  'with',
  // Add specific Korean particles/endings to exclude explicitly
  '은',
  '는',
  '이',
  '가',
  '을',
  '를',
  '야',
  // Add others if needed
]);

// React 앱의 정적 파일 제공
// App Hosting 환경에서는 빌드 후 smartglot-react/dist 경로에 파일이 위치하게 됩니다.
const reactAppDistPath = path.join(__dirname, 'smartglot-react', 'dist');
app.use(express.static(reactAppDistPath));

// 간단한 API 라우트 예시 (필요에 따라 추가/수정)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// === Elasticsearch 검색 API 추가 ===
app.get('/api/search', async (req, res) => {
  const query = req.query.q;

  if (!esClient) {
    return res.status(503).json({ message: 'Search service is unavailable.' });
  }

  if (!query) {
    return res.status(400).json({ message: 'Search query (q) is required.' });
  }

  try {
    const result = await esClient.search({
      index: 'search-ulmb',
      body: {
        query: {
          match: {
            content: query,
          },
        },
      },
    });

    res.json(result.hits.hits);
  } catch (error) {
    console.error('Elasticsearch search error:', error);
    if (
      error.meta &&
      error.meta.body &&
      error.meta.body.error &&
      error.meta.body.error.type === 'index_not_found_exception'
    ) {
      res.status(404).json({
        message: `Index 'documents' not found. Please index your data first.`,
      });
    } else {
      res
        .status(500)
        .json({ message: 'Error during search.', details: error.message });
    }
  }
});

// === Elasticsearch Term Analysis API ===
app.post('/api/analyze-terms', async (req, res) => {
  const inputText = req.body.text;

  if (!esClient) {
    return res
      .status(503)
      .json({ message: 'Analysis service is unavailable.' });
  }

  if (
    !inputText ||
    typeof inputText !== 'string' ||
    inputText.trim().length === 0
  ) {
    return res
      .status(400)
      .json({ message: 'Text input is required in the request body.' });
  }

  try {
    // Use the _analyze API for transient text analysis with Korean analyzer (nori)
    const result = await esClient.indices.analyze({
      body: {
        tokenizer: 'nori_tokenizer', // Use nori tokenizer
        filter: [
          'lowercase',
          {
            type: 'nori_part_of_speech', // Use nori POS filter
            stoptags: [
              // More specific Korean particle tags
              'JKS', // 주격 조사 (Subjective case marker)
              'JKC', // 보격 조사 (Complement case marker)
              'JKG', // 관형격 조사 (Adnominal case marker)
              'JKO', // 목적격 조사 (Objective case marker)
              'JKB', // 부사격 조사 (Adverbial case marker)
              'JKV', // 호격 조사 (Vocative case marker)
              'JKQ', // 인용격 조사 (Quotative case marker)
              'JX', // 보조사 (Auxiliary particle)
              'JC', // 접속 조사 (Conjunctive particle)
              // 'E',   // Consider removing endings (Eomi) as well if needed
            ],
          },
          // Add other filters if needed, e.g., nori_readingform
        ],
        text: inputText,
      },
    });

    // Process the tokens from the _analyze API response
    const termFrequencies = {};
    if (result.tokens) {
      result.tokens.forEach((tokenInfo) => {
        const term = tokenInfo.token;
        const lowerTerm = term.toLowerCase(); // Use lower case for checks

        // Filter out numbers and stop words
        if (!isNaN(term) || STOP_WORDS.has(lowerTerm)) {
          return; // Skip this token
        }

        // Filter out single-character English letters
        if (term.length === 1 && /^[a-zA-Z]$/.test(term)) {
          return; // Skip this token
        }

        // If term passes filters, count its frequency
        termFrequencies[term] = (termFrequencies[term] || 0) + 1;
      });
    }

    // Convert frequency map to sorted array
    const terms = Object.entries(termFrequencies)
      .map(([term, frequency]) => ({ term, frequency }))
      .sort((a, b) => b.frequency - a.frequency); // Sort by frequency desc

    res.json(terms);
  } catch (error) {
    console.error(
      'Elasticsearch term analysis error:',
      error.meta?.body || error,
    );
    // Handle potential errors from the _analyze API
    res
      .status(500)
      .json({ message: 'Error during text analysis.', details: error.message });
  }
});

// 모든 다른 GET 요청은 React 앱의 index.html을 서빙
// 이 라우트는 다른 모든 API 라우트 *뒤에* 위치해야 합니다.
app.get('*', (req, res) => {
  res.sendFile(path.join(reactAppDistPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
