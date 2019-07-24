import React, { Component } from "react";
import { FaPlus } from "react-icons/lib/fa";
import styled, { css } from "styled-components";

const Button = styled.button`
  ${props =>
    props.rounded &&
    css`
      width: 60px;
      height: 60px;
      border-radius: 50%;
    `};
`;

class AddItem extends Component {
  state = {
    itemAdd: false
  };
  handleChangebutton = e => {
    this.setState({
      itemAdd: true
    });
  };
  handleAdd = e => {
    e.preventDefault();
    this.props.handleAddTodo();
  };
  render() {
    let { itemAdd } = this.state;
    let { handleChange, values, messageContent, messageState } = this.props;
    return (
      <div>
        {!itemAdd ? (
          <div className="row justify-content-end">
            <div className="col-3">
              <Button
                rounded
                type="button"
                className="btn btn-primary btn-circle"
                onClick={this.handleChangebutton}
              >
                <FaPlus />
              </Button>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tarea"
                onChange={handleChange("task")}
                name="task"
                value={values.task}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Prioridad"
                onChange={handleChange("priority")}
                name="priority"
                value={values.priority}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={this.handleAdd}
                >
                  Crear
                </button>
              </div>
            </div>
          </div>
        )}
        {messageState ? (
          <div className="alert alert-danger mt-2" role="alert">
            {messageContent}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AddItem;
