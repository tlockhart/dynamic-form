import React, { useState, useEffect } from "react";
import NewSearch from "./NewSearch";

const SearchFilterAction = ({ data }) => {
    console.log("SearchFilterAction:", data)
    // const [ data, setData] = useState(data);
  return (
  <NewSearch
    placeholderText="Search By User" 
    data={data} 
    />);
};

export default SearchFilterAction;
