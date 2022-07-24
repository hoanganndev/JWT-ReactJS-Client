import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./Navigation.scss";
const Navigation = () => {
    const location = useLocation();
    const { user } = useContext(UserContext);
    if ((user && user.isAuthenticated === true) || location.pathname === "/") {
        return (
            <div>
                <div className="topnav">
                    <a className="active" href="/">
                        Home
                    </a>
                    <a href="/users">users</a>
                    <a href="/check2">check 2</a>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Navigation;
