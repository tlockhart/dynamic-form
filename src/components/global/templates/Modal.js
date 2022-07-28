import React, { useState, useEffect } from "react";
import SuperSelector from "../hoc/SuperSelector";
// react-hook-form
import { useForm } from "react-hook-form";

const Modal = (props) => {
  
  // Create submitFormHandler
//   const submitForm = (data) => {
//     //All inputs are passed back as the data argument
//     console.log(data);
//   };


//   const withProps=(WrappedComponent, data) =>{
//     return function ComponentWithProps() {
//         return (
//             <SuperSelector
//             component={WrappedComponent}
//             />
//         )
//     }
// }

// const SelectorWithProps = withProps(props.inputObject.userSelect);

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
