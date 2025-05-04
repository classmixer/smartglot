const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// 정적 파일 제공 (기존 index.html 등을 위함)
app.use(express.static(path.join(__dirname)));

// 간단한 API 라우트 예시 (필요에 따라 추가/수정)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// 모든 다른 GET 요청은 index.html을 서빙 (Single Page Application을 위한 설정)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 