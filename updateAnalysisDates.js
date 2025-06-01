import admin from 'firebase-admin';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// 서비스 계정 키 파일 경로 (실제 경로로 수정하세요)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(__dirname, './serviceAccountKey.json'), 'utf8'),
);

// Firebase Admin SDK 초기화 (데이터베이스 URL도 함께 제공)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://smartglot-default-rtdb.asia-southeast1.firebasedatabase.app/', // Firebase 콘솔에서 확인 가능 (예: https://your-project-id-default-rtdb.firebaseio.com)
});

const db = admin.database();
const historiesRef = db.ref('histories');

async function migrateAnalysisDates() {
  console.log('Starting migration of analysisDate fields...');
  try {
    const usersSnapshot = await historiesRef.once('value');
    const users = usersSnapshot.val();

    if (!users) {
      console.log('No user histories found.');
      return;
    }

    let updatePromises = [];

    Object.keys(users).forEach((userId) => {
      const userHistory = users[userId];
      Object.keys(userHistory).forEach((itemId) => {
        const item = userHistory[itemId];
        if (
          item &&
          item.analysisDate &&
          typeof item.analysisDate === 'string'
        ) {
          try {
            const numericTimestamp = new Date(item.analysisDate).getTime();
            if (!isNaN(numericTimestamp)) {
              console.log(
                `Preparing update for item: ${userId}/${itemId}, old date: "${item.analysisDate}", new date: ${numericTimestamp}`,
              );
              // 올바른 경로로 업데이트 약속을 생성합니다.
              const itemRef = db.ref(
                `histories/${userId}/${itemId}/analysisDate`,
              );
              updatePromises.push(
                itemRef
                  .set(numericTimestamp)
                  .then(() => {
                    console.log(`  Successfully updated ${userId}/${itemId}`);
                  })
                  .catch((err) => {
                    console.error(
                      `  Failed to update ${userId}/${itemId}:`,
                      err.message,
                    );
                  }),
              );
            } else {
              console.warn(
                `  Could not parse date string for ${userId}/${itemId}: "${item.analysisDate}" (Skipping)`,
              );
            }
          } catch (e) {
            console.error(
              `  Error processing date for ${userId}/${itemId}: "${item.analysisDate}" (Skipping)`,
              e.message,
            );
          }
        }
      });
    });

    if (updatePromises.length > 0) {
      console.log(
        `\nFound ${updatePromises.length} items to update. Waiting for all updates to complete...`,
      );
      await Promise.all(updatePromises);
      console.log('\nAll pending updates have been processed.');
    } else {
      console.log(
        '\nNo items found with string-type analysisDate that needed updating.',
      );
    }
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    // 스크립트가 종료되도록 데이터베이스 연결을 명시적으로 닫을 수 있습니다. (선택 사항)
    // await db.app.delete(); // 또는 admin.app().delete();
    console.log('Migration script finished.');
  }
}

migrateAnalysisDates().catch((err) => {
  console.error('Unhandled error in migrateAnalysisDates:', err);
});
