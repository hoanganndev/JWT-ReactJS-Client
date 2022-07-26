import axiosClient from "../setup/axiosClient";

const fetchGroups_Client = () => {
    return axiosClient.get("/api/v1/group/read");
};

export { fetchGroups_Client };
