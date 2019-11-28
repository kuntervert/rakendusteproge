import React from "react";
import {Link} from "react-router-dom";
import {userIcon} from "../icons";
import {cartIcon} from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import {dataContext} from "../index.jsx";

const Header = () => {
    return (
        <dataContext.Consumer>
        {
            (contextValue) =>(
                <div className="header">
                <Link to={"/"}>
                    <img className="header__logo" src="../images/evertlogo.png" />
                </Link>
                <div className="header__buttons">
        
                    {contextValue.user.email && <WelcomeIcon user={contextValue.user} />}
                    {!contextValue.user.email && <LoginRegisterIcon />}
                    {!contextValue.user.email && <LoginRegisterIcon2 />}
        
                    <div className={"header__button"}>
                        <img src={cartIcon}></img>
                        <div className={"header__button-text"}>Cart</div>
        
                    </div>
                </div>
            </div>
            )
            }
        </dataContext.Consumer>

    );
};

const LoginRegisterIcon = () =>(
    <Link className={"header__button"} to={"/login"}>
    <img src={userIcon}></img>
    <div className={"header__button-text"}>Login</div>
</Link>); 
const LoginRegisterIcon2 = () =>(
    <Link className={"header__button"} to={"/signup"}>
    <img src={userIcon}></img>
    <div className={"header__button-text"}>Signup</div>
</Link>); 

const WelcomeIcon = ({user}) =>(
    <Link className={"header__button"} to={`/users/${user._id}`}>
    <img src={userIcon}></img>
    <div className={"header__button-text"}>Welcome, {user.email}</div>
</Link>
);
WelcomeIcon.propTypes = {
    user: PropTypes.object.isRequired
};

export default Header;