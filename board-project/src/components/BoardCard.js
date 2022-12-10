
import React from 'react'


function BoardTitle(props){
    if (props.title === '' || props.title === undefined) {
      return null
    }else {
      return  <p className="font-bold bg-red-500 pb-2 p-2">{props.title}</p>
    }
  } 

  function BoardField(props){
    if (props.field === '' || props.field === undefined) {
      return null
    }else {
      return  <p className="bg-blue-500 p-2">{props.field}</p>
    }
  } 

  function BoardAssignie(props){
    if (props.assignie === '' || props.assignie === undefined) {
      return null
    }else {
      return  <p className="bg-gray-800 font-light p-2">{props.assignie}</p>
    }
  } 

  function BoardAddedDate(props){
    if (props.date === '' || props.date === undefined) {
      return null
    }else {
      return  <p className="bg-gray-600 font-extralight p-2">{props.date}</p>
    }
  } 


function BoardCard(props) {
  return (
    <div className="bg-cyan-500 rounded-2xl m-10">
        <BoardTitle title = {props.title}/>
        <BoardField field = {props.field}/>
        <div className="flex ">
        <BoardAssignie assignie = {props.assignie}/>
        <BoardAddedDate date = {props.date}/>
        </div>
       
    </div>
  )
}

export default BoardCard

// In the requirements below, the terms are quite general, since they depend on
// exactly what you planned out for your app.

// - A user should be able to create a **board/list**. Conceptually, a board/list
//   would contain many items that a user can add.
// - For each board, a user should be able to add **board items/tasks**.
// - Board items should have:
//   - A due date
//   - A title
//   - A boolean flag for completd or not completed
//   - An assignee (someone it is assigned to). It can be any random string that
//     the user wants.
//   - Anything else that you decide