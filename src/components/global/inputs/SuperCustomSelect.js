import React, {useState, useEffect} from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";

const SuperCustomSelect = (props) => {
  const { type, name, control, options  } = props;
  console.log("SuperCustomSelectProps:", props);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
        {...field}
          isMulti={true}
          isClearable // enable isClearable to demonstrate extra error handling
          isSearchable={false}
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      )}
    /> 
  );
};

export default  SuperCustomSelect;