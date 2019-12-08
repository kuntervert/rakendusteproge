import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

const redirecter = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "redirecter-hoc";
        static propTypes = {
            user: PropTypes.object.isRequired,
        };
        render(){
            if(!this.props.user.email) return <Redirect to={"/"}/>;   
            return(
                <WrappedComponent {...this.props}/>
            );
        }
    };
};

export default redirecter;