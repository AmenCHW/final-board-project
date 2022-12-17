import BoardCard from "./BoardCard";

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
 
  //   updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";



import "react-datepicker/dist/react-datepicker.css";

function DataCard() {
 



  const [boards, setBoards] = useState([]);
  const boardsCollectionRef = collection(db, "boards");

  

  const deleteBoard = async (id) => {
    const boardDoc = doc(db, "boards", id);
    await deleteDoc(boardDoc);
  };

  useEffect(() => {
    const getBoards = async () => {
      const data = await getDocs(boardsCollectionRef);
      setBoards(data.docs.map((board) => ({ ...board.data(), id: board.id })));
    };
    return getBoards;
  }, [boardsCollectionRef]);

  return (
    <div className="w-100 h-100 mx-12">

      <div className="flex ">
        <div className="w-1/2 bg-cyan-200 m-2 rounded-lg p-2">
            <h1 className="text-center font-semibold text-2xl mb-8">Requested</h1>
   
        <div>
          {boards.map((board) => {
         if(board.stat === "Requested"){
            return  <div className="mt-2 ">
            <BoardCard
              title={board.title}
              text={board.text}
              supervisor={board.supervisor}
              date={board.date.slice(0, 15)}
              key={board.id}
              stat={board.stat}
            />
            <button className="ml-3"
              onClick={() => {
                deleteBoard(board.id);
              }}
            >
              Delete
            </button>
          </div>       
        }
        else {
            return null
        };
          })}
        </div>
        </div>
        <div className="w-1/2 bg-cyan-300 m-2 rounded-lg p-2">
            <h1 className="text-center font-semibold text-2xl mb-8">In Progress</h1>
        <div>
          {boards.map((board) => {
         if(board.stat === "In Progress"){
            return  <div className="mt-2 ">
            <BoardCard
              title={board.title}
              text={board.text}
              supervisor={board.supervisor}
              date={board.date.slice(0, 15)}
              key={board.id}
              stat={board.stat}
            />
            <button className="ml-3"
              onClick={() => {
                deleteBoard(board.id);
              }}
            >
              Delete
            </button>
          </div>       
        }
        else {
            return null
        };
          })}
        </div>
        </div>
        <div className="w-1/2 bg-cyan-200 m-2 rounded-lg p-2">
            <h1 className="text-center font-semibold text-2xl mb-8">In Review</h1>
        <div>
          {boards.map((board) => {
         if(board.stat === "In Review"){
            return  <div className="mt-2 ">
            <BoardCard
              title={board.title}
              text={board.text}
              supervisor={board.supervisor}
              date={board.date.slice(0, 15)}
              key={board.id}
              stat={board.stat}
            />
            <button className="ml-3"
              onClick={() => {
                deleteBoard(board.id);
              }}
            >
              Delete
            </button>
          </div>       
        }
        else {
            return null
        };
          })}
        </div>
        </div>
        <div className="w-1/2 bg-cyan-300 m-2 rounded-lg p-2">
            <h1 className="text-center font-semibold text-2xl mb-8">Huurraayyy</h1>
        <div>
          {boards.map((board) => {
         if(board.stat === "Huurraayyy"){
            return  <div className="mt-2 ">
            <BoardCard
              title={board.title}
              text={board.text}
              supervisor={board.supervisor}
              date={board.date.slice(0, 15)}
              key={board.id}
              stat={board.stat}
            />
            <button className="ml-3"
              onClick={() => {
                deleteBoard(board.id);
              }}
            >
              Delete
            </button>
          </div>       
        }
        else {
            return null
        };
          })}
        </div>
        </div>
        </div>
    </div>
  );
}

export default DataCard;






