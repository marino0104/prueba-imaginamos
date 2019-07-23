import React, { Component } from "react";
import { todoList } from "../../../../Helper";
import TodoItem from "./TodoItem";

class Todolist extends Component {
  constructor() {
    super();
    let itemsList = todoList;
    this.state = {
      itemsList: itemsList
    };
  }
  render() {
    let { itemsList } = this.state;
    console.log(itemsList);
    return (
      <div className="container mt-5">
        <ul>
          {itemsList.map((item, index) => (
            <TodoItem key={index} task={item.task} priority={item.priority} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Todolist;
