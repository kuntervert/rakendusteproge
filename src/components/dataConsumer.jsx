import React from "react";
import {dataContext} from "../index.jsx";

const dataConsumer = (WrappedComponent) => {
    return class extends React.PureComponent{
        static displayName = "dataconsumer-hoc";
        render(){
            return (
                <dataContext.Consumer>
                    {
                        (value) => <WrappedComponent {...this.props} {...value}/>
                    }

                </dataContext.Consumer>
            );
        }
    };
}; 

export default dataConsumer;