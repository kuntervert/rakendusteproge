import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import {tokenUpdate} from "../store/actions.js";
import {userUpdate} from "../store/actions.js";
// import dataConsumer from "../components/dataConsumer.jsx";
import redirecter from "../components/redirecter.jsx";
import * as selectors from "../store/selectors.js";
import {toast} from "react-toastify"


class UserPage extends React.PureComponent {
    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props){ 
    super(props);
    this.state = {
        email:"",
        _id: this.props.user._id
    }};

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        fetch("/api/v1/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
        .then(res => {
            toast.success("email muudetud") 
        })
        .catch(err =>{
            toast.error("Emaili muutmine ebaonnestus");
            console.log("error:", err);
        });
        
      };


    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state.email)
        console.log(this.state._id)
      };


    handleLogout = () => {
        console.log("logout");
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    };



    render(){
        return (
            <div>
            <div className={"box"}>
                You are {this.props.user.email}, created at {this.props.user.createdAt}
                <FancyButton onClick={this.handleLogout}>Log Out</FancyButton>
                <input name="email" value={this.state.email} type="text" onChange={this.handleChange} required/>                
            </div>
            <button onClick={this.handleSubmit}>
            Submit
          </button>
          </div>
            
            
        );
    }
}

const mapStateToProps = (store) =>{
    return {
        user: selectors.getUser(store),
    };
};

export default connect(mapStateToProps)(redirecter(UserPage));
// export default connect()(mapStateToProps)(UserPage);
// export default dataConsumer(redirecter(UserPage));