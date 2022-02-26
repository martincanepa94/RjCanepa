// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSWZcjXKrMRAEtTUvgBL360GCMGeyGoU",
  authDomain: "rj-martincanepa.firebaseapp.com",
  projectId: "rj-martincanepa",
  storageBucket: "rj-martincanepa.appspot.com",
  messagingSenderId: "516906956664",
  appId: "1:516906956664:web:59d454150b033a8b727a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);