import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { registerNewUser_Client } from "../../services/userService_Client";
import "./Register.scss";

const Register = () => {
    const history = useHistory();
    const forwardToLoginPage = () => {
        history.push("/login");
    };
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const dafaultValidInput = {
        isValidEmail: true,
        isValidPhone: true,
        isValidUsername: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
    };
    const [objCheckInput, setOpjCheckInput] = useState(dafaultValidInput);

    const isValidInputs = () => {
        setOpjCheckInput(dafaultValidInput);
        let regx = /\S+@\S+\.\S+/;
        if (!email) {
            setOpjCheckInput({ ...dafaultValidInput, isValidEmail: false });
            toast.error("😒 Email is required !");
            return false;
        }
        if (!regx.test(email)) {
            setOpjCheckInput({ ...dafaultValidInput, isValidEmail: false });
            toast.warning("Please Enter a valid email address ! 😥");
            return false;
        }
        if (!phone) {
            setOpjCheckInput({ ...dafaultValidInput, isValidPhone: false });
            toast.error("😒 Phone is required !");
            return false;
        }
        if (!password) {
            setOpjCheckInput({ ...dafaultValidInput, isValidPassword: false });
            toast.error("😒 Password is required !");
            return false;
        }
        if (password !== confirmPassword) {
            setOpjCheckInput({
                ...dafaultValidInput,
                isValidConfirmPassword: false,
            });
            toast.error("😒 Your password is not the same !");
            return false;
        }
        return true;
    };

    const handleRegister = async () => {
        let validInputs = isValidInputs();
        if (validInputs) {
            let res = await registerNewUser_Client(
                email,
                phone,
                username,
                password
            );
            if (res && +res.errorCode === 0) {
                toast.success(res.errorMessage, {
                    icon: "👏",
                });
                history.push("/login");
            } else {
                // Validate error from res server
                if (res && res.data === "email") {
                    setOpjCheckInput({
                        ...dafaultValidInput,
                        isValidEmail: false,
                    });
                }
                if (res && res.data === "phone") {
                    setOpjCheckInput({
                        ...dafaultValidInput,
                        isValidPhone: false,
                    });
                }
                if (res && res.data === "password") {
                    setOpjCheckInput({
                        ...dafaultValidInput,
                        isValidPassword: false,
                    });
                }
                toast.error(res.errorMessage, {
                    icon: "🤨",
                });
            }
        }
    };

    const handlePressEnter = e => {
        if (e.charCode === 13 && e.code === "Enter") {
            handleRegister();
        }
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
                                    className="form-label "
                                >
                                    Email:
                                </label>
                                <input
                                    id="input-email"
                                    placeholder="Email address"
                                    type="email"
                                    className={
                                        objCheckInput.isValidEmail
                                            ? "form-control"
                                            : "form-control is-invalid"
                                    }
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="input-phonenumber"
                                    className="form-label "
                                >
                                    Phone number:
                                </label>
                                <input
                                    id="input-phonenumber"
                                    placeholder="Phone number"
                                    type="text"
                                    className={
                                        objCheckInput.isValidPhone
                                            ? "form-control"
                                            : "form-control is-invalid"
                                    }
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label
                                    htmlFor="input-username"
                                    className="form-label "
                                >
                                    User name:
                                </label>
                                <input
                                    id="input-username"
                                    className="form-control "
                                    placeholder="Enter your user name"
                                    type="text"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="d-sm-flex d-xl-column">
                                <div className="form-group password ">
                                    <label
                                        htmlFor="input-password"
                                        className="form-label "
                                    >
                                        Password:
                                    </label>
                                    <input
                                        id="input-password"
                                        placeholder="Enter your password"
                                        type="password"
                                        className={
                                            objCheckInput.isValidPassword
                                                ? "form-control"
                                                : "form-control is-invalid"
                                        }
                                        value={password}
                                        onChange={e =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="form-group mt-3 mt-sm-0 ">
                                    <label
                                        htmlFor="input-reenter-password"
                                        className="form-label "
                                    >
                                        Re-enter password:
                                    </label>
                                    <input
                                        id="input-reenter-password"
                                        placeholder="Re-enter your password again"
                                        type="password"
                                        className={
                                            objCheckInput.isValidConfirmPassword
                                                ? "form-control"
                                                : "form-control is-invalid"
                                        }
                                        value={confirmPassword}
                                        onChange={e =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        onKeyPress={e => handlePressEnter(e)}
                                    />
                                </div>
                            </div>

                            <button
                                className="btn btn-login  signup"
                                onClick={() => handleRegister()}
                            >
                                Sign up
                            </button>

                            <div className="text-center">
                                <span className="d-inline">
                                    <span>Already've an account!</span>
                                    <button
                                        type="btn"
                                        className="btn re-signin d-inline"
                                        onClick={() => forwardToLoginPage()}
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
