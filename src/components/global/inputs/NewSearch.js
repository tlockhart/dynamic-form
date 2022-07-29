import React, {useState, useEffect} from "react";
import {useDataFilter} from "../../global/hooks/useDataFilter"


const NewSearch = ({ data, placeholderText }) => {
  const [term, setTerm] = useState(null);
  const [filteredData, setFilteredData] = useDataFilter(
    data,
    term,
    "label value"
  );
  
  function filterData(term) {
    setTerm(term);
  }

  return (
    <input
      type="search"
      placeholder={placeholderText}
      onChange={(e) => filterData(e.target.value)}
      className="search-input btn btn-icon-text my-2 mr-2  mg-r-8 .bd-l-0  pd-6-f"
    />
  );
};

export default NewSearch;
