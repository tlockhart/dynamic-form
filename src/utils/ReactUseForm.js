import React, { Component } from "react";
import { useForm } from "react-hook-form";

class ComponentsRenderer extends Component {
  constructor(props) {
    super(props);
    const { components, component } = props;

    this.state = {
      components,
      component
    };
    console.log("ReactUseForm Components: PROPS:", props);
    console.log("Length", Array.isArray(components));
  }

  render() {
    
    return (
      <>
        { Array.isArray(this.state.components)
          ? this.state.components.map((Component, key) => (
              <Component key={key} />
            ))
          : <this.state.component/>}
      </>
    );
  }
}

export default ComponentsRenderer;
