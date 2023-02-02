// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDat8MGhliQVTzChPRobyJ_hnjwaLBbgN0",
  authDomain: "photogram-fc0bd.firebaseapp.com",
  projectId: "photogram-fc0bd",
  storageBucket: "photogram-fc0bd.appspot.com",
  messagingSenderId: "526161002191",
  appId: "1:526161002191:web:610e6466d633cfbd4581ba",
  measurementId: "G-KNCJ1X461F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// // Initialize Firebase Authentication and get a reference to the service
// export const  auth = getAuth(app);