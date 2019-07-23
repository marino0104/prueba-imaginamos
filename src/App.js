import React, { Component } from "react";
import Footer from "./Components/Footer/Footer";
import Todolist from "./Components/Body/TodoList/Todolist";

export default class App extends Component {
  render() {
    return (
      <div>
        <Todolist />
        <Footer />
      </div>
    );
  }
}
