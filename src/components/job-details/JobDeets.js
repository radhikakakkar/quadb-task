import React from "react";
import { useState } from "react";
import "./JobDeets.css";
import { useNavigate } from "react-router-dom";

function JobDeets() {
  const navigate = useNavigate();
  return (
    <div className="job-details-container">
      <div className="job-details-body">
        <div className="job-title">
          <h1>(JOB NAME)</h1>
        </div>
        <div className="job-description">
          <h1>(JOB DESCRIPTION)</h1>
        </div>
      </div>
      <button
        type="submit"
        id="apply-btn"
        onClick={navigate("/application-form")}
      >
        APPLY
      </button>
    </div>
  );
}

export default JobDeets;
