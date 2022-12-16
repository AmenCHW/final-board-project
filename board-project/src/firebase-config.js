import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCkpgXepsiL_wzs7Xd_pcCpPoWIRg0oCMs",
  authDomain: "kanban-board-final.firebaseapp.com",
  projectId: "kanban-board-final",
  storageBucket: "kanban-board-final.appspot.com",
  messagingSenderId: "599914171615",
  appId: "1:599914171615:web:5471b459094040510b6d6a",
  measurementId: "G-CV3CNWYLD6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);