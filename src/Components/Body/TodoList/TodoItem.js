import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    let { task, priority } = this.props;
    return (
      <li className="border p-3  row">
        <div className="col-5">
          <span className="badge badge-primary mr-3">Tarea:</span>
          {task}
        </div>
        <div className="col-4">
          <span className="badge badge-primary mr-3">Prioridad:</span>
          {priority}
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-outline-danger">
            Eliminar
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
