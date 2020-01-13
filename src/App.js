import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const initialToDoList = [
  {
    task: "Shopping",
    id: 1,
    completed: false
  },
  {
    task: "Car Wash",
    id: 2,
    completed: false
  },
  {
    task: "Clean Dishes",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: initialToDoList
    };
  }

  toggleItem(toDoId) {
    this.setState({
      toDoList: this.state.toDoList.map(toDo => { 
        if (toDo.id === toDoId) {
          toDo.completed = !toDo.completed;
        }
        return toDo;
      })
    });
  }

  addItem(itemText) {
    if (itemText !== "") {
      this.setState({
        toDoList: [...this.state.toDoList, {
          task: itemText,
          id: Date.now(),
          completed: false
        }]
      });
    }
  }

  clearCompleted() {
    this.setState({
      toDoList: this.state.toDoList.filter(i => !i.completed)
    });
  }

  render() {
    return (
      <>
        <TodoList toDoList={this.state.toDoList} toggleItem={(toDoId) => this.toggleItem(toDoId)} />
        <TodoForm addItem={(itemText) => this.addItem(itemText)} clearCompleted={() => this.clearCompleted()} />
      </>
    );
  }
}

export default App;
