import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
const Login = () => {
    const history = useHistory();
    const handleCreateNewAccount = () => {
        history.push("/register");
    };
    return (
        <>
            <div className="login-container">
                <div className="container">
                    <div className="row px-3 px-sm-0 py-3">
                        <div className="content-left col-12 d-none col-sm-7 d-sm-block ">
                            <div className="brand">
                                <h1>Marcus</h1>
                                <p>Web Developer</p>
                            </div>
                            <div className="detail">
                                Sometimes people are beautiful. Not in looks.
                                Not in what they say. Just in what they are.
                            </div>
                        </div>
                        <div className="content-right col-12  col-sm-5 d-flex flex-column gap-3 py-3 px-3 ">
                            <div className="header ">
                                <h1>Welcome back</h1>
                                <p>Welcome back! Please enter your details.</p>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="input-email-phone"
                                    className="form-label label"
                                >
                                    Email or Phone:
                                </label>
                                <input
                                    id="input-email-phone"
                                    className="form-control "
                                    placeholder="Email address or phone number"
                                    type="text"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="input-password"
                                    className="form-label label"
                                >
                                    Password:
                                </label>
                                <input
                                    id="input-password"
                                    className="form-control "
                                    placeholder="Enter your password"
                                    type="password"
                                />
                            </div>

                            <button className="btn btn-login  signin">
                                Sign in
                            </button>
                            <div>
                                <div className="d-flex justify-content-center">
                                    <span>or sign in with</span>
                                </div>
                                <div className="social d-flex justify-content-center">
                                    <i
                                        className="fa fa-google"
                                        aria-hidden="true"
                                    ></i>
                                    <i
                                        className="fa fa-facebook"
                                        aria-hidden="true"
                                    ></i>
                                </div>
                            </div>
                            <span className="text-center ">
                                <a href="#" className="forgot-password">
                                    Forgotten password?
                                </a>
                            </span>
                            <hr />
                            <div className="text-center">
                                <span className="d-inline">
                                    <span> Don’t have an account?</span>
                                    <button
                                        type="btn"
                                        className="btn signup d-inline"
                                        onClick={() => handleCreateNewAccount()}
                                    >
                                        Sign up for free
                                    </button>
                                </span>
                                <div className="return-home ">
                                    <Link to="/">
                                        <i
                                            className="fa fa-chevron-circle-left"
                                            aria-hidden="true"
                                        ></i>
                                        <span className="ms-2">
                                            Return to home page ?
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
