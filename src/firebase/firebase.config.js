// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvAJip7SJ3MQbpVoEZg-wuY4n7GhXSeMk",
  authDomain: "ema-john-with-firebase-a-bdadf.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-bdadf",
  storageBucket: "ema-john-with-firebase-a-bdadf.appspot.com",
  messagingSenderId: "60711460242",
  appId: "1:60711460242:web:1dbb2fd88cfa914324754b",
  measurementId: "G-5ZR48VQ9Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;