
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVGZbcNjPAFzoQ4Ft5Zq4KDnj_kL-PIVI",
  authDomain: "sunglass-hub-62dd0.firebaseapp.com",
  projectId: "sunglass-hub-62dd0",
  storageBucket: "sunglass-hub-62dd0.firebasestorage.app",
  messagingSenderId: "789588504399",
  appId: "1:789588504399:web:b5cc4f00d08b38a57b9f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };