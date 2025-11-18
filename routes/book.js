import express from 'express';
import fetch from 'node-fetch'; // Node 18 이상이면 global fetch 사용 가능

const router = express.Router();

router.get('/book/search', async (req, res) => {
  const query = req.query.query || '자바';

  const url = new URL('https://openapi.naver.com/v1/search/book.json');
  url.searchParams.set('query', query);
  url.searchParams.set('start', 1);
  url.searchParams.set('display', 5);

  try {
    const response = await fetch(url, {
      headers: {
        'X-Naver-Client-Id': 'ArZFc7NLSbJ4n44RndGs',     // ★ 환경변수로 관리
        'X-Naver-Client-Secret': 'efhfcH9ckj',
      },
    });

    if (!response.ok) {
      throw new Error('Naver API error: ' + response.status);
    }

    const data = await response.json();
    res.json(data); // 프론트로 그대로 전달
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: '서버 에러', error: String(err) });
  }
});

export default router;