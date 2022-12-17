import React from "react";

function BoardTitle(props) {
  if (props.title === "" || props.title === undefined) {
    return null;
  } else {
    return <p className="font-bold w-3/4 p-1 ml-4 mr-4 rounded-2xl text-lg">{props.title}</p>;
  }
}

function BoardText(props) {
  if (props.text === "" || props.text === undefined) {
    return null;
  } else {
    return <p className=" text-center m-2 p-4  rounded-sm">{props.text}</p>;
  }
}

function BoardSupervisor(props) {
  if (props.supervisor === "" || props.supervisor === undefined) {
    return null;
  } else {
    return (
      <p className="flex items-center h-6 px-2 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">
        assigned to: {props.supervisor}
      </p>
    );
  }
}

function BoardDate(props) {
  if (props.date === "" || props.date === undefined) {
    return null;
  } else {
    return <p className=" font-extralight text-sm m-2">Date: {props.date}</p>;
  }
}
function BoardStat(props) {
  if (props.stat === "" || props.stat === undefined) {
    return null;
  } else {
    return <p className="   ml-4  mt-3 rounded-2xl text-sm ">{props.stat}</p>;
  }
}

function BoardCard(props) {
  return (
    <div className="bg-slate-100  rounded-2xl p-3 mt-5">
     
      
      <div className="flex space-between">
      <BoardTitle title={props.title} />
      <BoardStat stat={props.stat} />
      </div>
      <BoardText text={props.text} />
      <BoardSupervisor supervisor={props.supervisor} />
        <BoardDate date={props.date} />
      
    </div>
  );
}

export default BoardCard;

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
