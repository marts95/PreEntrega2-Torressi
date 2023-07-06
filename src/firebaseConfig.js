import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBZr-OZpGK7vKloN7eiDnrzOTFwhn-N07E",
  authDomain: "panaderiasanchezbase.firebaseapp.com",
  projectId: "panaderiasanchezbase",
  storageBucket: "panaderiasanchezbase.appspot.com",
  messagingSenderId: "221607190068",
  appId: "1:221607190068:web:89c02311ec099c0d5c3461",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)