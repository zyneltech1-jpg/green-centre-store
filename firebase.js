import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWmVyjSdRpXx_O6JMRzroK-Vf4gtLEuEo",
    authDomain: "green-centre-store-ef1db.firebaseapp.com",
    projectId: "green-centre-store-ef1db",
    storageBucket: "green-centre-store-ef1db.firebasestorage.app",
    messagingSenderId: "590493205066",
    appId: "1:590493205066:web:851b0bb69c2449db319cb3",
    measurementId: "G-SSCVJDYV3B"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth };

console.log("Firebase connected successfully 🔥");