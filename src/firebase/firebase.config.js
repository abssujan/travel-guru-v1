// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBayNUsF3YxfYqw1-hxJhLxPOkr2gU8lO0",
  authDomain: "travel-guru-v1-258d1.firebaseapp.com",
  projectId: "travel-guru-v1-258d1",
  storageBucket: "travel-guru-v1-258d1.appspot.com",
  messagingSenderId: "900242496810",
  appId: "1:900242496810:web:e6374d57365fc936219253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;