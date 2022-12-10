import BoardCard from "./BoardCard";

import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function DataToCard() {
    const [newTitle, setNewTitle] = useState("")
    const [newDate, setNewDate] = useState("")
    const [newText, setNewText] = useState("")
    const [newSupervisor, setNewSupervisor] = useState("")

  const [boards, setBoards] =useState([])
  const boardsCollectionRef = collection(db, "boardData")

  const createBoard = async ()=>{
    await addDoc(boardsCollectionRef, {title: newTitle, Date: newDate, Text: newText, Supervisor: newSupervisor})
  }


  useEffect(()=> {

    const getBoards = async () => {
        const data = await getDocs(boardsCollectionRef)
        setBoards(data.docs.map((board)=> ({...board.data(), id: board.id})))
        console.log(data.docs)

    }
    getBoards()
  }, [])

  return <div>
    <div>
    <input className="m-2 p-2 bg-gray-600" placeholder="title..." onChange={(event)=> {setNewTitle(event.target.value)}}/>
    <input className="m-2 p-2 bg-gray-600" placeholder="text..." onChange={(event)=> {setNewText(event.target.value)}}/>
    <input className="m-2 p-2 bg-gray-600" placeholder="date..." onChange={(event)=> {setNewDate(event.target.value)}}/>
    <input className="m-2 p-2 bg-gray-600" placeholder="Supervisor..." onChange={(event)=> {setNewSupervisor(event.target.value)}}/>
  </div>
    <button className="bg-cyan-200 p-2" onClick={createBoard}>Add New</button>
    {boards.map((board)=> {
        return <div>
            <BoardCard title={board.title} field={board.Text} assignie={board.Supervisor} date={board.Date}/>
            </div>
    })}
  </div>
}

export default DataToCard;