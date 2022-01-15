import React from "react";
import "./Form.css";
function Form_success(props) {
  return (
    <div class="success-page-container">
      <div class="success-page-body">
        <div>
          <h3>YOUR APLLICATION HAS BEEN SUBMITTED</h3>
        </div>
        <div>
          <h6 className="user-name">{props.user_name}</h6>
        </div>
        <div className="symbol">
          <i id="correct" className="fas fa-check-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default Form_success;
