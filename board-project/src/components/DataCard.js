import BoardCard from "./BoardCard";

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  //   updateDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "firebase/firestore";

import { ReactComponent as ViewBoardIcon } from "../assets/icons/view-board.svg";
import { ReactComponent as ViewListIcon } from "../assets/icons/view-list.svg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DataCard() {
  const [newTitle, setNewTitle] = useState("");
  const [newStat, setNewStat] = useState("");
  const [newDate, setNewDate] = useState(null);
  const [newText, setNewText] = useState("");
  const [newSupervisor, setNewSupervisor] = useState("");

  const [view, setView] = useState("board");

  const [boards, setBoards] = useState([]);
  const boardsCollectionRef = collection(db, "boards");

  const createBoard = async () => {
    await addDoc(boardsCollectionRef, {
      title: newTitle,
      date: newDate.toString(),
      text: newText,
      supervisor: newSupervisor,
      stat: newStat,
    });
  };

  const deleteBoard = async (id) => {
    const boardDoc = doc(db, "boards", id);
    await deleteDoc(boardDoc);
  };

  useEffect(() => {
    onSnapshot(collection(db, "boards"), (snapshot) => {
      snapshot.docChanges().forEach((docChange) => {
        if (docChange.type === "added") {
          setBoards((prevBoards) => [
            ...prevBoards,
            docChange.doc.data(),
          ]);
        } else if (docChange.type === "removed") {
          setBoards(
            boards.filter((movie) => movie.id !== docChange.doc.id)
          );
        }
      });
    });
  }, []);

  useEffect(() => {
    const getBoards = async () => {
      const data = await getDocs(boardsCollectionRef);
      setBoards(data.docs.map((board) => ({ ...board.data(), id: board.id })));
    };
    return getBoards;
    
  }, [boardsCollectionRef]);

  return (
    <div className="w-100 h-100 mx-12">
      <div className="switch-view-container flex justify-end items-center h-10 ">
        {view === "board" && (
          <ViewBoardIcon
            onClick={() => setView("list")}
            className="text-gray-600 cursor-pointer"
            width={26}
            height={26}
          />
        )}
        {view === "list" && (
          <ViewListIcon
            onClick={() => setView("board")}
            className="text-gray-600 cursor-pointer"
            width={26}
            height={26}
          />
        )}
      </div>
      {view === "board" && (
        <div>
          <input
            className="m-2 p-2 bg-gray-600"
            placeholder="title..."
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
          />
          <input
            className="m-2 p-2 bg-gray-600"
            placeholder="text..."
            onChange={(event) => {
              setNewText(event.target.value);
            }}
          />
          {/* <input
            className="m-2 p-2 bg-gray-600"
            placeholder="date..."
            onChange={(event) => {
              setNewDate(event.target.value);
            }}
          /> */}
          <DatePicker
            className="m-2 p-2 bg-gray-600 text-white"
            selected={newDate}
            onSelect={setNewDate}
            onChange={(event) => setNewDate(event)}
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            scrollableMonthYearDropdown
          />

          <input
            className="m-2 p-2 bg-gray-600"
            placeholder="Supervisor..."
            onChange={(event) => {
              setNewSupervisor(event.target.value);
            }}
          />
          {/* <input
            className="m-2 p-2 bg-gray-600"
            placeholder="Status..."
            onChange={(event) => {
              setNewStat(event.target.value);
            }}
          /> */}

          <select className="m-2 p-2 bg-gray-600" onChange={(event) => {
              setNewStat(event.target.value);
            }}>
            <option>Status</option>
            <option>Requested</option>
            <option>In Progress</option>
            <option>In Review</option>
            <option>Huurraayyy</option>
          </select>
          <button className="bg-cyan-200 p-2" onClick={createBoard}>
            Add New
          </button>
        </div>
      )}
      {view === "list" && (
        <div>
          <h1 className="ml-2 font-extrabold text-2xl">Latest:</h1>
          {boards.map((board) => {
            return (
              <div className="mt-2">
                <BoardCard
                  title={board.title}
                  text={board.text}
                  supervisor={board.supervisor}
                  date={board.date.slice(0, 15)}
                  stat={board.stat}
                  key={board.id}
                />
                <button className="ml-3"
                  onClick={() => {
                    deleteBoard(board.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DataCard;
