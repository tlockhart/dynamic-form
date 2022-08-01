import React, { useEffect, useState } from "react";

/*  UseBuildComponents constructs a list of components wrapped in functions, from an object definition. This allows the components to be rendered by the ComponensRenderer File. */
export const useBuildComponents = (definition) => {
    
  // Components to be rendered
  const [componentArray, setComponentArray] = useState([]);

  // Build component array
  function buildComponents(Objects) {
    const componentsArray = Objects.map((Object, key) => {
        console.log("BuildComponentProps:", Object.props);
      return () => (
        <div 
            className={Object.props.class} 
        > 
            {React.createElement(Object.name, Object.props)}
        </div>
      );
    });
    return componentsArray;
  }

  useEffect(() => {
    setComponentArray(buildComponents(definition));
  }, []);
  return [componentArray, buildComponents];
};
