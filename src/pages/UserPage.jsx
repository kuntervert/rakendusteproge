import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import {tokenUpdate} from "../store/actions.js";
import {userUpdate} from "../store/actions.js";
// import dataConsumer from "../components/dataConsumer.jsx";
import redirecter from "../components/redirecter.jsx";

class UserPage extends React.PureComponent {
    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };

    handleLogout = () => {
        console.log("logout");
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    };



    render(){
        return (
            <div className={"box"}>
                You are {this.props.user.email}, created at {this.props.user.createdAt}
                <FancyButton onClick={this.handleLogout}>Log Out</FancyButton>
            </div>
            
            
        );
    }
}

const mapStateToProps = (store) =>{
    return {
        user: store.user,
    };
};

export default connect(mapStateToProps)(redirecter(UserPage));
// export default connect()(mapStateToProps)(UserPage);
// export default dataConsumer(redirecter(UserPage));