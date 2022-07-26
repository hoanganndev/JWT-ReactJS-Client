import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useLocation, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
import { logoutUser_Client } from "../../services/userService_Client";
import logo from "./jwt.png";
import "./Navigation.scss";

const Navigation = () => {
    const location = useLocation();
    const history = useHistory();
    const { user, logoutContext } = useContext(UserContext);
    const handleLogoutUser = async () => {
        let res = await logoutUser_Client();
        if (res && res.errorCode === 0) {
            localStorage.removeItem("jwt");
            logoutContext();
            history.push("/login");
            toast.success(res.errorMessage);
        } else {
            toast.error(res.errorMessage);
        }
    };

    if (
        (user && user.isAuthenticated === true) ||
        location.pathname === "/" ||
        location.pathname === "/about"
    ) {
        return (
            <>
                <div className="nav-header">
                    <Navbar
                        collapseOnSelect
                        expand="lg"
                        bg="light"
                        variant="light"
                    >
                        <Container>
                            <NavLink className="nav-link nav-brand-name" to="/">
                                <img
                                    className="image"
                                    src={logo}
                                    alt="logo json web token"
                                />
                            </NavLink>
                            <Navbar.Brand href="/"></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto navbar-left">
                                    <NavLink className="nav-link" to="/" exact>
                                        Home
                                    </NavLink>
                                    <NavLink className="nav-link" to="/users">
                                        Users
                                    </NavLink>
                                    <NavLink className="nav-link" to="/roles">
                                        Roles
                                    </NavLink>
                                    <NavLink
                                        className="nav-link"
                                        to="/group-roles"
                                    >
                                        Group-Roles
                                    </NavLink>
                                    <NavLink
                                        className="nav-link"
                                        to="/projects"
                                    >
                                        Projects
                                    </NavLink>
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </Nav>
                                <Nav className="navbar-right">
                                    {user && user.isAuthenticated === true ? (
                                        <>
                                            <Nav.Item className="nav-link">
                                                Welcome!
                                                <span className="nav-user">
                                                    {`👏 `}
                                                    {`${user.account.username}`}
                                                </span>
                                            </Nav.Item>
                                            <NavDropdown
                                                title={
                                                    <i
                                                        className="fa fa-cog configs"
                                                        aria-hidden="true"
                                                    ></i>
                                                }
                                                id="collasible-nav-dropdown"
                                            >
                                                <NavDropdown.Item>
                                                    Change Password
                                                </NavDropdown.Item>
                                                <NavDropdown.Divider />
                                                <NavDropdown.Item
                                                    onClick={() =>
                                                        handleLogoutUser()
                                                    }
                                                >
                                                    Log Out
                                                    <i
                                                        className="fa fa-sign-out ms-2"
                                                        aria-hidden="true"
                                                    ></i>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                className="nav-link nav-login"
                                                to="/login"
                                            >
                                                Login !
                                            </Link>
                                        </>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    } else {
        return <></>;
    }
};

export default Navigation;
