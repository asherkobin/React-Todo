import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      toDoText: ""
    };
  }

  handleChange = e => {
    this.setState({ toDoText: e.target.value });
  };

  handleAdd = e => {
    this.props.addItem(this.state.toDoText);
    this.setState({ toDoText: "" });
  };

  handleClear = e => {
    this.props.clearCompleted();
  };

  render() {
    return (
      <form onSubmit={(e) =>  { e.preventDefault(); }}>
        <input type="text" name="toDoText" value={this.state.toDoText} onChange={this.handleChange} />
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleClear}>Clear Completed</button>
      </form>
    );
  };
};

export default TodoForm;