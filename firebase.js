import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCL-UzsqcdR1fGCiGeaC0hmubTaYb6aPrM",
  authDomain: "react-http-16978.firebaseapp.com",
  databaseURL: "https://react-http-16978-default-rtdb.firebaseio.com",
  projectId: "react-http-16978",
  storageBucket: "react-http-16978.appspot.com",
  messagingSenderId: "864962459221",
  appId: "1:864962459221:web:9dc84a4f0d4acc18b106dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const googleProvider = new GoogleAuthProvider();
export { auth };
export const db = getFirestore(app);
