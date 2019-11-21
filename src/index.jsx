import React from "react";
import ReactDOM from "react-dom";

import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import {BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./components/UserPage.jsx";


const root = document.getElementById("app");


ReactDOM.render(
    <BrowserRouter>
        <Route path="/" exact component={HomePage}/>
        <Route path="/items/:itemId" exact component={ItemPage}/>
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/signup" exact component={SignupPage}/>
        <Route path="/users/:userId" exact component={UserPage}/>

    </BrowserRouter>,
    root
);