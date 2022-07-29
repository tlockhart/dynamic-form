import React, {Component} from "react";

class ComponentsRenderer extends Component {
    constructor (props) {
        super(props);
        const {components} = props;
       
        this.state= {
            components
        }
        console.log("Components: PROPS:", props);
    }
    render = () => (
        <>
            {this.state.components.map((Component, key) => (<Component key={key} />))}
        </>
    )
}

export default ComponentsRenderer;