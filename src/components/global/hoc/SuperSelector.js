import React, {Component} from "react";

class SuperSelector extends Component {
    constructor (props) {
        super(props);
        console.log("SuperSelector: PROPS:", props);
    }
    render () {
        return <this.props.WrappedComponent {...this.props}/>
    }
}

export default SuperSelector;