import React from "react";
import "./signupform.css";
import PropTypes from "prop-types";
import {toast} from "react-toastify";

class SignupPage extends React.PureComponent {

    static propTypes = {
        history: PropTypes.object.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            confirmPassword:""
        };
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("submit", this.state);
        fetch("/api/auth/signup", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
        .then( res => res.json())
        .then( data =>{
            console.log("data", data);
            this.props.history.push("/login");

        })
        .catch(err =>{
            console.log("Error", err);
            toast.error("Signup failed", {position: "bottom-center"});
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
                <div><h1 style={{textAlign: "center"}}>Signup</h1></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="box">
                        <h1>Create account</h1>

                        <input type="email"
                               name="email" placeholder={"Email"}
                               value={this.state.email}
                               onChange={this.handleChange}
                               className="email"/>

                        <input type="password"
                               name="password" placeholder={"Set password"}
                               value={this.state.password}
                               onChange={this.handleChange}
                               className="password"/>

                        <input type="password"
                               name="confirmPassword" placeholder={"Re-enter password"}
                               value={this.state.confirmPassword}
                               onChange={this.handleChange}
                               className="password"/>

                        <button className={"btn"}>Create</button>
                    </div>


                </form>
            </>
        );
    }
}

export default SignupPage;