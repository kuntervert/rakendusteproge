import React from "react";
import {Link} from "react-router-dom";
import "./loginform.css";
import PropTypes from "prop-types";

class LoginPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
        onLogin: PropTypes.func.isRequired,
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
        console.log("submit", this.state);
        fetch("/api/auth/login", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
        .then (res => res.json())
        .then( ({token, user}) =>{
            console.log("response", token, user);
            this.props.onLogin({token, user});
            this.props.history.push(`/users/${user._id}`);
        })
        .catch(err =>{
            console.log("Error", err);
        });
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

export default LoginPage;