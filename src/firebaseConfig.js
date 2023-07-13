import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZr-OZpGK7vKloN7eiDnrzOTFwhn-N07E",
  authDomain: "panaderiasanchezbase.firebaseapp.com",
  projectId: "panaderiasanchezbase",
  storageBucket: "panaderiasanchezbase.appspot.com",
  messagingSenderId: "221607190068",
  appId: "1:221607190068:web:89c02311ec099c0d5c3461",
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);

const autorizacion = getAuth(app);

export const login = async ({ email, contraseña }) => {
  try {
    return await signInWithEmailAndPassword(autorizacion, email, contraseña);
  } catch (error) {
    console.error(error);
  }
};

export const registro = async ({ email, contraseña }) => {
  return await createUserWithEmailAndPassword(autorizacion, email, contraseña);
};

const google = new GoogleAuthProvider();

export const loginGoogle = async () => {
  return await signInWithPopup(autorizacion, google);
};
