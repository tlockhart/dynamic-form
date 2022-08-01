import React, {useState, useEffect} from "react";
import Select from "react-select";

const CustomSelect = (props) => {

  return (
    <Select
      isMulti
      name={props.type}
      type={props.type}
      options={props.options}
      className="basic-multi-select"
      classNamePrefix="select"
      defaultValue={props.defaultValues}
      onChange={props.handleChange}
      control={props.control}
      // value={props.values}
    />
    
  );
};

export default  CustomSelect;