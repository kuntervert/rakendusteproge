import React from "react";
import {Link} from "react-router-dom";
import "./loginform.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {userUpdate, tokenUpdate} from "../store/actions";
import {toast} from "react-toastify";
import * as services from "../services.js";

class LoginPage extends React.PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        services.login(this.state)
        .then( this.handleSuccess)
        .catch(err =>{
            console.log("Error", err);
            toast.error("Login error", {position: "bottom-center"});
        });
    };
   
    handleSuccess = ({token, user}) =>{
        this.props.dispatch(userUpdate(user));
        this.props.dispatch(tokenUpdate(token));
        this.props.history.push(`/users/${user._id}`);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render(){
        return (
            <>
                <div><h1 style={{textAlign: "center"}}>Login</h1></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="box">
                        <h1>Log in to your account</h1>

                        <input type="email"
                               name="email" placeholder={"Email"}
                               value={this.state.email}
                               onChange={this.handleChange}
                               className="email"/>

                        <input type="password"
                               name="password" placeholder={"Password"}
                               value={this.state.password}
                               onChange={this.handleChange}
                               className="password"/>

                        <button className={"btn"}>Login</button>
                        <Link to="/signup">
                        <button className={"btn"}>
                            To signup
                        </button>
                         </Link>
                    </div>


                </form>
                </>
        );
    }
}

export default connect()(LoginPage);