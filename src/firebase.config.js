// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
const firebaseConfig = {
  apiKey: "AIzaSyDg2lGUJARhl6vvzBGwCixw9yhVSFiLTgE",
  authDomain: "rendermart-b9a8e.firebaseapp.com",
  projectId: "rendermart-b9a8e",
  storageBucket: "rendermart-b9a8e.appspot.com",
  messagingSenderId: "164339393356",
  appId: "1:164339393356:web:58c5d2f6e855f66c89a5e9",
  measurementId: "G-DVE3BJMJX3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);