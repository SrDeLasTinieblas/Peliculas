// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBytX9AUsuHWnsb1Vk7AwD60tKchKlvDR8",
  authDomain: "peliculas-82ea2.firebaseapp.com",
  projectId: "peliculas-82ea2",
  storageBucket: "peliculas-82ea2.appspot.com",
  messagingSenderId: "53027942801",
  appId: "1:53027942801:web:8570015d73ee0e8ccc2a30",
  measurementId: "G-72RCLEEC1M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);