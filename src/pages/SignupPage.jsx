import React from "react";
import Header from "../components/Header.jsx";
import "./signupform.css";

class SignupPage extends React.PureComponent {
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
        fetch("/api/users/signup", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state),
        })
        .then( res =>{
            console.log("response", res);
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
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <div className="box">
                        <h1>Login</h1>

                        <input type="email"
                               name="email" placeholder={"Email"}
                               value={this.state.email}
                               onChange={this.handleChange}
                               onFocus="field_focus(this, 'email');"
                               onBlur="field_blur(this, 'email');"
                               className="email"/>

                        <input type="password"
                               name="password" placeholder={"Set password"}
                               value={this.state.password}
                               onChange={this.handleChange}
                               onFocus="field_focus(this, 'email');"
                               onBlur="field_blur(this, 'password');"
                               className="password"/>

                        <input type="password"
                               name="confirmPassword" placeholder={"Re-enter password"}
                               value={this.state.confirmPassword}
                               onChange={this.handleChange}
                               onFocus="field_focus(this, 'email');"
                               onBlur="field_blur(this, 'password');"
                               className="password"/>

                        <button className={"btn"}>Login</button>
                    </div>


                </form>
            </>
        );
    }
}

export default SignupPage;