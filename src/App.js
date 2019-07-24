import React, { Component } from "react";
import Footer from "./Components/Footer/Footer";
import Todolist from "./Components/Body/TodoList/Todolist";
import { users } from "../Helper";
import Login from "./Components/Body/Login/Login";

export default class App extends Component {
  state = {
    users: users,
    user: "",
    password: "",
    todoList: false,
    messageState: false,
    messageContent: "",
    userClass: "",
    passwordClass: ""
  };
  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
      passwordClass: "",
      userClass: ""
    });
  };
  handleSubmit = () => {
    let { user, password } = this.state;
    if (user.length && password.length) {
      users.map(successUser => {
        if (successUser.user === user && successUser.password === password) {
          this.setState({
            todoList: true
          });
        } else {
          this.setState({
            messageState: true,
            messageContent: "usuario y contraseña no coinciden"
          });
        }
      });
    } else {
      if (!user.length) {
        this.setState({
          userClass: "alert-danger"
        });
      }
      if (!password.length) {
        this.setState({
          passwordClass: "alert-danger"
        });
      }
      this.setState({
        messageState: true,
        messageContent: "por favor complete los campos"
      });
    }
  };
  render() {
    let {
      todoList,
      messageState,
      messageContent,
      passwordClass,
      userClass
    } = this.state;
    return (
      <div>
        {!todoList ? (
          <Login
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            messageState={messageState}
            messageContent={messageContent}
            passwordClass={passwordClass}
            userClass={userClass}
          />
        ) : (
          <Todolist />
        )}

        <Footer />
      </div>
    );
  }
}
