import axiosClient from "../setup/axiosClient";
const registerNewUser_Client = (email, phone, username, password) => {
    return axiosClient.post("/api/v1/register", {
        email,
        phone,
        username,
        password,
    });
};
const loginUser_Client = (valueLogin, password) => {
    return axiosClient.post("/api/v1/login", {
        valueLogin,
        password,
    });
};

export { registerNewUser_Client, loginUser_Client };
