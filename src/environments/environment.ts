// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz0LnkWodOY6o35Pt0ckn22kbKAxGAYH8",
  authDomain: "angular-ui-b3901.firebaseapp.com",
  projectId: "angular-ui-b3901",
  storageBucket: "angular-ui-b3901.appspot.com",
  messagingSenderId: "490585892506",
  appId: "1:490585892506:web:d1e9c15f6beeb5c1016123",
  measurementId: "G-690K97QNB8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);