import React, { useEffect, useState } from "react";
import ControlledSelect from "../inputs/SuperCustomSelect";

const Selector = {
    MAIL: "mail",
  };
  
const SuperForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit(props.submitForm)}>
      <div style={{ background: "#f6f6fb", padding: "24px" }}>

        <div className="form-group">
          <label htmlFor="mail" className="mg-b-4 card-sub-title">
            Assignee
          </label>

          {props.children}

        </div>
       
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SuperForm;
