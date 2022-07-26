import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Users from "../components/ManageUsers/Users";
import Roles from "../components/Roles/Roles";
import GroupRoles from "../components/GroupRoles/GroupRoles";
import AboutMe from "../components/AboutMe/AboutMe";

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
                <PrivateRoutes path="/roles" component={Roles} />
                <PrivateRoutes path="/group-roles" component={GroupRoles} />
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/about">
                    <AboutMe />
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
