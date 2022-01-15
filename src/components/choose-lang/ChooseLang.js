import React from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseLang.css";
import { useState, useEffect } from "react";

function ChooseLang() {
  const [lang, setLang] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  //   useEffect(() => {
  const navigate = useNavigate();
  //   });

  return (
    <div className="choose-lang-container">
      <div className="choose-lang-header">
        <h2>Find The Best Job For Yourself With Us!</h2>
        {/* <h2>hellp</h2> */}
      </div>

      <div className="choose-lang-div">
        <input
          className="choose-lang"
          placeholder="Enter your preferred language"
        ></input>
      </div>
      <div className="go-btn-div">
        <button
          id="go-btn"
          type="button"
          onClick={navigate("/job-details")}
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default ChooseLang;
