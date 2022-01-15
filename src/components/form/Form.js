import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function Form({ setState }) {
  const navigate = useNavigate();

  const user_application = (e) => {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var cover_note = document.getElementById("cover-letter-note").value;
    var msg = document.getElementById("application-msg");

    if (name == "" || email == "" || cover_note == "") {
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
        msg.innerHTML = name + " is registered with " + email;

        setState({
          name: name,
          email: email,
          cover_note: cover_note,
          isSubmitted: true,
        });
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-body">

        <h1> Application form </h1>
        <br></br>
        <h6> Kindly fill out your details below :</h6>
       
        <form id="apply-form" onSubmit={user_application}>
        <div id="application-msg"> </div>
          <div className="mb-3">
            <label className="form-label">Enter your Name:</label>
            <input
              id="name"
              name="user_name"
              type="text"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Your Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Cover letter note:</label>
            <textarea
              type="text"
              name="cover-letter-note"
              id="cover-letter-note"
              className="form-control"
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Upload Resume/Cover letter here:
            </label>
            <input
              type="file"
              name="upload-resume"
              id="upload-resume"
              className="form-control"
            ></input>
          </div>
          <button
            type="submit"
            id="application-submit-btn"
            onClick={navigate("/application-success")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
