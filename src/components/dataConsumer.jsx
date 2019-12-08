import React from "react";
import {AuthContext} from "../App.jsx";

const dataConsumer = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "dataconsumer-hoc";
        render(){
            return (
                <AuthContext.Consumer>
                    {
                        (value) => <WrappedComponent {...this.props} {...value}/>
                    }

                </AuthContext.Consumer>
            );
        }
    };
}; 

export default dataConsumer;