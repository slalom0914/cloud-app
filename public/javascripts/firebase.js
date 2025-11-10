import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js';

// 파이어베이스 API를 활용하여 웹 서비스를 제공받기 위한 초기화 작업.

  const firebaseConfig = {
    apiKey: "AIzaSyDbp4zkt-6S_S71MK33l-tugS5PLnLtx7E",
    authDomain: "cloude-kss.firebaseapp.com",
    projectId: "cloude-kss",
    storageBucket: "cloude-kss.firebasestorage.app",
    messagingSenderId: "246583646321",
    appId: "1:246583646321:web:30be2ace8cd6f5f044e3d0"
  };

  // Initialize Firebase
  // 변수(app)앞에 export를 붙여서 외부(html,js)에서 사용 가능하도록 구현함.
  export const app = initializeApp(firebaseConfig);