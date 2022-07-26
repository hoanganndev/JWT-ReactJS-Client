import axiosClient from "../setup/axiosClient";

const createRoles_Client = roles => {
    return axiosClient.post("/api/v1/role/create", [...roles]);
};

const fetchAllRoles_Client = (page, limit) => {
    return axiosClient.get(`/api/v1/role/read?page=${page}&limit=${limit}`);
};

const deteteRole_Client = role => {
    return axiosClient.delete("/api/v1/role/delete", { data: { id: role.id } });
};

const updateCurrentRole_Client = roleData => {
    return axiosClient.put("/api/v1/role/update", {
        ...roleData,
    });
};

export {
    createRoles_Client,
    fetchAllRoles_Client,
    deteteRole_Client,
    updateCurrentRole_Client,
};
