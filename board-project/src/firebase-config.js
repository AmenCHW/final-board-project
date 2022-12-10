import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCmJIz33pESuap2dDkwGghjeHk2KFkSuEU",
    authDomain: "final-board-project-b40f9.firebaseapp.com",
    projectId: "final-board-project-b40f9",
    storageBucket: "final-board-project-b40f9.appspot.com",
    messagingSenderId: "820676187818",
    appId: "1:820676187818:web:65368e6c2973d2a0cee2d3",
    measurementId: "G-6HW6C5V61L"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)