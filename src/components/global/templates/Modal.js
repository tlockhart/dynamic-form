
import React, { useState, useEffect } from "react";
import SuperSelector from "../hoc/SuperSelector";
// react-hook-form
import { useForm } from "react-hook-form";

const Modal = (props) => {
  

return (
    <form onSubmit={(e)=>props.handleSubmit(e)}>
    {/* // <form> */}
      <div>
        <h6 className="modal-title">{props.header}</h6>
      </div>
      <div
        className="detail-modal-body"
        style={{ padding:"20px 20px"}}
      >
        <div className="form-group">
          <label></label>
          
          {/* RENDER CHILDREN */}
         { props.children}

        </div>
      </div>

      <div className="modal-footer">
        <button className="btn ripple btn-primary" type="submit">
          Send
        </button>
        <button
          className="btn ripple btn-secondary muted"
          type="button"
          onClick={props.handleCloseModal}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Modal;
