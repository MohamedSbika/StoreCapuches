// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSO_b3McmrtMLj7yeaC8rWsYzSVtl-LhI",
  authDomain: "abdellino-9f72d.firebaseapp.com",
  projectId: "abdellino-9f72d",
  storageBucket: "abdellino-9f72d.appspot.com",
  messagingSenderId: "450774925708",
  appId: "1:450774925708:web:70b5d83c6170a2840056a9",
  measurementId: "G-7KDMVJJQHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = app;  // Assurez-vous d'exporter l'instance d'application correcte
export const firebaseAnalytics = analytics;  // Exportez l'instance d'Analytics si nécessaire