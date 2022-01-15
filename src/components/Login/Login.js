import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  let [state, setState] = useState({
    user_name: "",
    email: "",
  });

  useEffect(() => {
    console.log(state);
    localStorage.setItem("user", JSON.stringify(state));
  });

  const handleChange = async (e) => {
    var btn = (document.getElementById("login-btn").innerHTML = "Loggin in...");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    await setState({ user_name: name, email: email });
  };

  const login_user = async (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var msg = document.getElementById("msg");

    if (name == "" || email == "" || password == "") {
      msg.className = "alert alert-danger";
      msg.innerHTML = "please enter all values";
    } else if (name.length < 3) {
      msg.className = "alert alert-danger";
      msg.innerHTML = "name should be atleast three characters long";
    } else {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos <= 1 || dotpos <= atpos + 2 || email.lenth >= dotpos + 2) {
        msg.className = "alert alert-danger";
        msg.innerHTML = "Enter valid email";
      } else {
        msg.className = "alert alert-success";
        msg.innerHTML = "Welcome" + name;
        handleChange();
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-body">
        <div className="top-container">
          <div className="backdrop"></div>
          <div className="login-header">
            <p>Welcome</p>
            <p>Back</p>
            <span class="small-text">Log in to continue</span>
          </div>
        </div>

        <form id="logform" onSubmit={login_user}>
          <div id="msg"> </div>
          <div className="mb-3">
            <label className="input-label"></label>
            <input
              id="name"
              name="user_name"
              type="text"
              placeholder="Name"
            ></input>
          </div>
          <div className="mb-3">
            <label className="input-label"></label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="mb-3">
            <label className="input-label"></label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            ></input>
          </div>

          <div className="mb-1 muted-link">
            <a href="#"> Forget Your Password? </a>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              id="login-btn"
              onClick={navigate("/choose-lang")}
            >
              Log in
            </button>
          </div>
          <div>
            <div className="muted-link">
              Don't have an account?
              <a
                className="signup-link"
                // onClick={navigate("/")}
                href="http://localhost:3000/"

              >
                {" "}
                SIGNUP{" "}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
