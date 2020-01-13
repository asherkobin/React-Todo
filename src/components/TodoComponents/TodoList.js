import React from "react";
import Todo from "./Todo";

const TodoList = ({toDoList, toggleItem}) => {
  return (
    toDoList.map((toDo) => {
      return <Todo toDo={toDo} key={toDo.id} toggleItem={toggleItem} />
    })
  )
};

export default TodoList;