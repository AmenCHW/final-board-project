import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfmjJTGSjZjLORUyh50xZf-A_0L_WCfV0",
  authDomain: "kanban-board-aa93a.firebaseapp.com",
  projectId: "kanban-board-aa93a",
  storageBucket: "kanban-board-aa93a.appspot.com",
  messagingSenderId: "530829903181",
  appId: "1:530829903181:web:45bce869fed08ef5d1a304",
  measurementId: "G-HYSFHXVF1Y"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);