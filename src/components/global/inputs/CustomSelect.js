import React, {useState, useEffect} from "react";
import Select from "react-select";

const CustomSelect = (props) => {

  console.log("Called CustomSelect:", props)
  return (
    <Select
      isMulti
      name={props.type}
      options={props.options}
      className="basic-multi-select"
      classNamePrefix="select"
      defaultValue={props.defaultValues}
      onChange={props.handleChange}
      value={props.values}
    />
  );
};

export default  CustomSelect;