import React from "react";
import { useHistory } from "react-router-dom";
import "./Register.scss";
const Register = () => {
    const history = useHistory();
    const handleLogin = () => {
        history.push("/login");
    };

    return (
        <>
            <div className="register-container">
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
                                <h1>Register </h1>
                                <p>Please fill in some information below !</p>
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="input-email"
                                    className="form-label label"
                                >
                                    Email:
                                </label>
                                <input
                                    id="input-email"
                                    className="form-control "
                                    placeholder="Email address"
                                    type="email"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="input-phonenumber"
                                    className="form-label label"
                                >
                                    Phone number:
                                </label>
                                <input
                                    id="input-phonenumber"
                                    className="form-control "
                                    placeholder="Phone number"
                                    type="text"
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="input-username"
                                    className="form-label label"
                                >
                                    User name:
                                </label>
                                <input
                                    id="input-username"
                                    className="form-control "
                                    placeholder="Enter your user name"
                                    type="text"
                                />
                            </div>
                            <div className="d-sm-flex d-xl-column">
                                <div className="form-group password ">
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
                                <div className="form-group mt-3 mt-sm-0 ">
                                    <label
                                        htmlFor="input-reenter-password"
                                        className="form-label label"
                                    >
                                        Re-enter password:
                                    </label>
                                    <input
                                        id="input-reenter-password"
                                        className="form-control "
                                        placeholder="Re-enter your password again"
                                        type="password"
                                    />
                                </div>
                            </div>

                            <button className="btn btn-login  signup">
                                Sign up
                            </button>

                            <div className="text-center">
                                <span className="d-inline">
                                    <span>Already've an account!</span>
                                    <button
                                        type="btn"
                                        className="btn re-signin d-inline"
                                        onClick={() => handleLogin()}
                                    >
                                        Login here
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
