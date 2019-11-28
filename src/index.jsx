import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import UserPage from "./pages/UserPage.jsx";
import NotFound from "./pages/NotFound.jsx";

class App extends React.Component{
    state = {
        token: null,
        user: {
            email: null,
            _id: null,
            createdAt: null,
        },
    };

    handleLogin = ({token, user}) => {
        this.setState({
            user, token
        });
    };


    render(){
        return(
            <BrowserRouter>
                        <Route
             path={"/"}
             render= { (props) =>
              <Header {...props} 
              token={this.state.token}
              user={this.state.user}
              />} />
            <Switch>

            <Route path="/"
             exact component={HomePage}/>

            <Route path="/items/:itemId" 
            exact component={ItemPage}/>

            <Route component={NotFound}/>

            <Route path="/login" 
            exact render={(props) => <LoginPage {...props} onLogin={this.handleLogin}/>}/>
            
            <Route path="/signup" exact component={SignupPage}/>

            <Route 
            path="/users/:userId"
            exact
            render={(props) => {
                return <UserPage{...props} user={this.state.user}/>;
            }}
            />
        </Switch>
        </BrowserRouter>
        );
    }
}

const root = document.getElementById("app");

ReactDOM.render(<App />, root);