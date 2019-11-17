import React from "react";
import {Link} from "react-router-dom";
import {userIcon} from "./icons";
import {cartIcon} from "./icons";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img className="header__logo" src="../images/evertlogo.png" />
            </Link>
            <div className="header__buttons">
                <div className={"header__button"}>
                    <img src ={userIcon}></img>
                    <div className={"header__button-text"}>Login <br></br>Signup</div>
                    </div>
                <div className={"header__button"}>
                    <img src ={cartIcon}></img>
                    <div className={"header__button-text"}>Cart</div>
                </div>
            </div>
        </div>
    );
};

export default Header;