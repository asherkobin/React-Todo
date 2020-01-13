import React from "react";

const Todo = ({toDo, toggleItem}) => {
  const toDoStyle = {
    textDecoration: toDo.completed ? "line-through" : ""
  }

  return (
    <div onClick={() => toggleItem(toDo.id)} style={toDoStyle}>{toDo.task}</div>
  )
};

export default Todo;