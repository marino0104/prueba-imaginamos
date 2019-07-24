import React, { Component } from "react";

class Login extends Component {
  render() {
    let {
      handleSubmit,
      handleChange,
      messageState,
      messageContent,
      passwordClass,
      userClass
    } = this.props;
    return (
      <div className="login">
        <div className="login-container">
          <h2 className="text-center">Login</h2>
          <hr />
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Usuario</label>
            <input
              type="text"
              className={`form-control ${userClass}`}
              onChange={handleChange("user")}
              name="user"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Contraseña</label>
            <input
              type="password"
              className={`form-control ${passwordClass}`}
              onChange={handleChange("password")}
              name="password"
            />
          </div>
          {messageState ? (
            <div className="alert alert-danger" role="alert">
              {messageContent}
            </div>
          ) : (
            ""
          )}
          <div className="form-group text-center mt-5">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
