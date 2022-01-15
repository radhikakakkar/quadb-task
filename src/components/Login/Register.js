import { useState, useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
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
    var btn = (document.getElementById("register-btn").innerHTML =
      "Registering...");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    await setState({ user_name: name, email: email });
  };

  const register_user = async (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_dupe = document.getElementById("confirm-password").value;
    var msg = document.getElementById("msg");

    if (name == "" || email == "" || password == "" || password_dupe == "") {
      msg.className = "alert alert-danger";
      msg.innerHTML = "please enter all values";
    } else if (name.length < 3) {
      msg.className = "alert alert-danger";
      msg.innerHTML = "name should be atleast three characters long";
    } else if (password.length < 3) {
      msg.className = "alert alert-danger";
      msg.innerHTML = "password should be atleast three characters long";
    } else if (password != password_dupe) {
      msg.className = "alert alert-danger";
      msg.innerHTML = "password do not match";
    } else {
      var atpos = email.indexOf("@");
      var dotpos = email.lastIndexOf(".");
      if (atpos <= 1 || dotpos <= atpos + 2 || email.lenth >= dotpos + 2) {
        msg.className = "alert alert-danger";
        msg.innerHTML = "Enter valid email";
      } else {
        msg.className = "alert alert-success";
        msg.innerHTML = name + " is registered with " + email;
        handleChange();
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-body">
        <div className="top-container">
          <div className="backdrop"></div>
          <div className="register-header">
            <p>Register</p>
            <p>here</p>
            <span class="small-text">Sign up to continue</span>
          </div>
        </div>
        <div id="msg"> </div>
        <form id="regform" onSubmit={register_user}>
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
              placeholder="Create Password"
            ></input>
          </div>
          <div className="mb-3">
            <label className="input-label"></label>
            <input
              type="password"
              name="password"
              id="confirm-password"
              placeholder="Confirm Password"
            ></input>
          </div>

          <div className="mb-3">
            <button
              type="submit"
              id="register-btn"
              onClick={navigate("/choose-lang")}
            >
              Sign Up
            </button>
          </div>
          <div>
            <div className="muted-link">
              Already have an account?
              <a
                className="login-link"
                // onClick={navigate("/login")}
                href="http://localhost:3000/login"
              >
                {" "}
                LOGIN{" "}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
