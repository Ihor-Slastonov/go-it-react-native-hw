import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {
  apiKey: 'AIzaSyDat8MGhliQVTzChPRobyJ_hnjwaLBbgN0',
  authDomain: 'photogram-fc0bd.firebaseapp.com',
  projectId: 'photogram-fc0bd',
  storageBucket: 'photogram-fc0bd.appspot.com',
  messagingSenderId: '526161002191',
  appId: '1:526161002191:web:610e6466d633cfbd4581ba',
  measurementId: 'G-KNCJ1X461F',
};

// Init Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
//Init authorization
// export const auth = getAuth();

//Init storage
export const storage = getStorage(app);

//Init Firestore database
export const db = getFirestore(app);
