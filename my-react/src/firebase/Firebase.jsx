// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyAoQFjLcMrftt7HcKGMvT6RWntAPYysfgg",
  authDomain: "corporate-events-managem-55b46.firebaseapp.com",
  projectId: "corporate-events-managem-55b46",
  storageBucket: "corporate-events-managem-55b46.appspot.com",
  messagingSenderId: "341339071404",
  appId: "1:341339071404:web:3ff69dba3726486f9c9009",
  measurementId: "G-VC0HP7WJ8E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const analytics = getAnalytics(app);


export {auth}