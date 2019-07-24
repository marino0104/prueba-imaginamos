import React, { Component } from "react";
import { FaTrash } from "react-icons/lib/fa";
import styled, { css } from "styled-components";

const Button = styled.button`
  align-items: center;
`;
class TodoItem extends Component {
  render() {
    let { task, priority, handleDel, id } = this.props;
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
        <div className="col-3 ">
          <Button
            type="button"
            className="btn btn-outline-danger align-baseline d-flex"
            onClick={handleDel(id)}
          >
            <FaTrash className="mr-2" />
            Eliminar
          </Button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
