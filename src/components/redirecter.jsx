import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

import { UserPropTypes } from "../store/reducer";

const redirecter = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "redirecter-hoc";
        static propTypes = {
            user: PropTypes.shape(UserPropTypes),
        };
        render(){
            if(!this.props.user) return <Redirect to={"/"}/>;   
            return(
                <WrappedComponent {...this.props}/>
            );
        }
    };
};



export default redirecter;