import { useEffect, useState } from "react";

/****************************************
 * useDateFilter: Returns a list of results filtered
 * by search term.
 * 
 * Minimum requirements:
 * data - Unfiltered data set to be searched.
 * term - Search term
 * fields - the field/s to search seperated by space.
 * type [Optional] - Type of search:  "combined".  
 * Add the names of the fields to be combined, 
 * seperated by a space.  Note default is single field,
 * which doesn't require a type name.
 * 
 * Example Call: Users.js
 ****************************************/
export const useDataFilter = (data, term, fields, type) => {
  // console.log("Data:", data, "; term:", term, ";fields:", fields, "; TYPE:", type)
  const [results, setResults] = useState();

  function filter() {
    return data.filter((item, index) => {
        const fieldType = typeof fields;
        const isFieldStr = fieldType === "string"
        
      switch(true) {
        case type === "combined":
          const combinedFields = fields.split(' ');
          let combinedValue ='';
          console.log("CombinedFields:", combinedFields);

          // Get values for combined fields
          combinedFields.map((field, index) => {
            if(index === 0) {
              combinedValue = item[field];
            }
            else {
              combinedValue += " "+item[field]
            }
          });
          // console.log("CombinedValue:", combinedValue);
          const isMatch = combinedValue.toLowerCase().includes(term?.toLowerCase());
          // console.log("ISMATCH:", isMatch);
          return isMatch;
        default:
          console.log("Item:", item)
          if (item && isFieldStr){
            const isMatch = item[fields].toLowerCase().includes(term?.toLowerCase());
            // console.log("ISMATCH:", isMatch);
            return isMatch;
            }
            return false;
      }    
      
    });
  }

  useEffect(() => {
    const search = async () => {
      setResults(filter());
      // On initial render, effect is called and cleanup function returned.  
      // On change to term, cleanup function from last render is executed.
      return () => {
        console.log("CLEANUP");
      };
    };
    /**********************
     ** BEGIN_DEBOUNCE **
     ***********************/
    // Set results for initial load without a delay
    if (term && !results?.length) {
      search();
    }
    // Debounce search term: Set results for search term
    else {
      // Throttle Requests
      const timeoutId = setTimeout(() => {
        if (term) {
        // Run search, if user paused for 500 ms
          search();
        }
      }, 500);

      // Cleanup function: Cancel previous timer
      return () => {
        clearTimeout(timeoutId);
      };
    }
    /******************/
  }, [term]);
  return [results, filter];
};
