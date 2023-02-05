import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyDat8MGhliQVTzChPRobyJ_hnjwaLBbgN0',
  authDomain: 'photogram-fc0bd.firebaseapp.com',
  projectId: 'photogram-fc0bd',
  storageBucket: 'photogram-fc0bd.appspot.com',
  messagingSenderId: '526161002191',
  appId: '1:526161002191:web:610e6466d633cfbd4581ba',
  measurementId: 'G-KNCJ1X461F',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//Init storage fot post's images

const storage = getStorage(app);

export const storagePostImage = ref(storage,'photos')