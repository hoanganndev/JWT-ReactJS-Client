import axiosClient from "../setup/axiosClient";

const fetchRolesByGroup_Client = groupId => {
    return axiosClient.get(`/api/v1/roles/by-group/${groupId}`);
};

const assignRolesToGroup_Client = data => {
    return axiosClient.post("/api/v1/roles/assign-to-group", { data });
};

export { fetchRolesByGroup_Client, assignRolesToGroup_Client };
