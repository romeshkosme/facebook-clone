import React, { useState, useRef } from "react";
import "./Login.css";
import facebookLogo from "../../assets/images/Facebook-Logo.png";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { onInputChange, loginUser } from "../../store/auth/login/actions";
import { getValidator } from "../../helpers/utils";

function Login(props) {
  const validator = useRef(getValidator());
  const [, forceUpdate] = useState();

  const login = (e) => {
    e.preventDefault();
    validator.current.showMessages();
    if (validator.current.allValid()) {
      const data = {};
      data.email = props.email;
      data.password = props.password;
      props.loginUser(data, props.history);
    } else {
      forceUpdate(1);
    }
  };

  return (
    <div className="login flex h-screen bg-gray-100 items-center justify-center">
      <div className="w-3/4 flex ">
        <div className="login__content w-2/4 flex flex-col items-center justify-center">
          <div className="w-3/4">
            <img src={facebookLogo} alt="" className="w-3/4" />
            <p className="text-2xl ml-2">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
        </div>
        <div className="login__form w-2/4 max-w-sm flex flex-col items-start justify-center">
          <div className="bg-white p-3 rounded-md shadow-xl">
            <form className="flex flex-col items-center">
              <input
                type="email"
                name=""
                id=""
                value={props.email}
                placeholder="Email address"
                className="rounded-md my-1 w-full border-gray-300 h-14"
                onChange={(e) => props.onInputChange("email", e.target.value)}
              />
              {validator.current.message(
                "email",
                props.email,
                "_required|email",
                { className: "text-red-500 text-xs" }
              )}
              <input
                type="password"
                name=""
                id=""
                value={props.password}
                placeholder="Password"
                className="rounded-md my-1 w-full border-gray-300 h-14"
                onChange={(e) =>
                  props.onInputChange("password", e.target.value)
                }
              />
              {validator.current.message(
                "password",
                props.password,
                "_required",
                { className: "text-red-500 text-xs" }
              )}
              {props.loginError && <span className="text-red-600 text-sm">
              {props.loginError}
              </span>}
              <button
                className="rounded-md p-2 my-1 bg-blue-500 text-white w-full h-14"
                onClick={login}
              >
                Log In
              </button>
            </form>
            <Link to="/login">
              <p className="text-center my-3">Forgetten Password?</p>
            </Link>
            <hr />
            <Link to="/register">
              <button className="rounded-md p-2 my-1 bg-green-500 text-white w-96 mt-7 h-14">
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { email, password, loginError } = state.Login;
  return { email, password, loginError };
};

export default withRouter(
  connect(mapStateToProps, { onInputChange, loginUser })(Login)
);
