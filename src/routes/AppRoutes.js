import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Users from "../components/ManageUsers/Users";

const AppRoutes = () => {
    const Projects = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <span>This space will display projects</span>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            <Switch>
                <PrivateRoutes path="/users" component={Users} />
                <PrivateRoutes path="/projects" component={Projects} />
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </>
    );
};

export default AppRoutes;
