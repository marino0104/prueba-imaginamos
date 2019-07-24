import React, { Component } from "react";
import { todoList } from "../../../../Helper";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

let todoItems = [];
class Todolist extends Component {
  constructor() {
    super();
    todoList.map((item, index) => {
      let todoSingle = {
        id: index,
        task: item.task,
        priority: item.priority
      };
      todoItems.push(todoSingle);
    });
    this.state = {
      itemsList: todoItems,
      messageState: false,
      messageContent: ""
    };
  }
  state = {
    task: "",
    priority: ""
  };
  handleChange = name => e => {
    e.preventDefault();
    this.setState({
      [name]: e.target.value,
      messageState: false,
      messageContent: ""
    });
  };
  handleAddTodo = () => {
    let id = todoItems.length;
    let { task, priority } = this.state;
    if (task) {
      let todoSingle = {};
      if (priority) {
        todoSingle = {
          id: id,
          task: task,
          priority: priority
        };
      } else {
        todoSingle = {
          id: id,
          task: task,
          priority: "Baja"
        };
      }

      todoItems.push(todoSingle);
      this.setState({
        itemsList: todoItems,
        task: "",
        priority: ""
      });
    } else {
      this.setState({
        messageState: true,
        messageContent: "Por favor, complete el campo tarea"
      });
    }
  };
  handleDel = id => e => {
    e.preventDefault();
    for (let i = 0; i < todoItems.length; i++) {
      if (id === todoItems[i].id) {
        todoItems.splice(i, 1);
        this.setState({
          itemsList: todoItems
        });
      }
    }
  };
  render() {
    let {
      itemsList,
      task,
      priority,
      messageContent,
      messageState
    } = this.state;
    let values = {
      task,
      priority
    };
    return (
      <div className="container todolist  mt-5 p-3">
        <div className="px-3">
          <AddItem
            handleChange={this.handleChange}
            handleAddTodo={this.handleAddTodo}
            values={values}
            messageContent={messageContent}
            messageState={messageState}
          />
        </div>
        <div className="container mt-5">
          <ul className="pl-0">
            {itemsList.map((item, index) => (
              <TodoItem
                key={index}
                task={item.task}
                priority={item.priority}
                id={item.id}
                handleDel={this.handleDel}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todolist;
