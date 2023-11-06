// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnK--JFcpQWuyiWimRQR-PUKErKh1gnF8",
  authDomain: "dashboard-covid-2d74d.firebaseapp.com",
  projectId: "dashboard-covid-2d74d",
  storageBucket: "dashboard-covid-2d74d.appspot.com",
  messagingSenderId: "772590318113",
  appId: "1:772590318113:web:7dcca9577c1544266da960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }