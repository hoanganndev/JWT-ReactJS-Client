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

const fetchAllUsers_Client = (page, limit) => {
    return axiosClient.get(`/api/v1/user/read?page=${page}&limit=${limit}`);
};

const deleteUser_Client = user => {
    return axiosClient.delete("/api/v1/user/delete", {
        data: { id: user.id },
    });
};

const fetchGroups_Client = () => {
    return axiosClient.get("/api/v1/group/read");
};

const createNewUser_Client = userData => {
    return axiosClient.post("/api/v1/user/create", {
        ...userData,
    });
};

const updateCurrentUser_Client = userData => {
    return axiosClient.put("/api/v1/user/update", {
        ...userData,
    });
};

export {
    registerNewUser_Client,
    loginUser_Client,
    fetchAllUsers_Client,
    deleteUser_Client,
    fetchGroups_Client,
    createNewUser_Client,
    updateCurrentUser_Client,
};
