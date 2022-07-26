import _ from "lodash";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    fetchRolesByGroup_Client,
    assignRolesToGroup_Client,
} from "../../services/groupRolesService_Client";
import { fetchAllRoles_Client } from "../../services/roleService_Client";
import { fetchGroups_Client } from "../../services/groupService_Client";
import "./GroupRoles.scss";
const GroupRole = () => {
    const [userGroups, setUserGroups] = useState([]);
    const [listRoles, setListRoles] = useState([]);
    const [selectGroup, setSelectGroup] = useState("");
    const [assignRolesByGroup, setAssignRolesByGroup] = useState([]);

    useEffect(() => {
        getGroups();
        fetchRoles();
    }, []);

    const getGroups = async () => {
        try {
            let res = await fetchGroups_Client();
            if (res && res.errorCode === 0) {
                setUserGroups(res.data);
            } else {
                toast.error(res.errorMessage);
            }
        } catch (error) {
            toast.error("😔 Something wrong when i call api !");
        }
    };

    const fetchRoles = async () => {
        let res = await fetchAllRoles_Client();
        if (res && +res.errorCode === 0) {
            setListRoles(res.data);
        }
    };

    const buildDataRolesByGroup = (groupRoles, allRoles) => {
        let resuit = [];
        if (allRoles && allRoles.length > 0) {
            allRoles.map(role => {
                let object = {};
                object.id = role.id;
                object.url = role.url;
                object.description = role.description;
                object.isAssigned = false;
                if (groupRoles && groupRoles.length > 0) {
                    object.isAssigned = groupRoles.some(
                        item => item.url === object.url
                    );
                }
                resuit.push(object);
            });
        }
        return resuit;
    };

    const hanleOnchangeGroup = async groupId => {
        setSelectGroup(groupId);
        if (groupId) {
            let res = await fetchRolesByGroup_Client(groupId);
            if (res && +res.errorCode === 0) {
                let result = buildDataRolesByGroup(res.data.Roles, listRoles);
                setAssignRolesByGroup(result);
            }
        }
    };

    const handleSelectRole = value => {
        console.log(">>>assignRolesByGroup", assignRolesByGroup);
        const _assignRolesByGroup = _.cloneDeep(assignRolesByGroup);
        let foundindex = _assignRolesByGroup.findIndex(
            item => +item.id === +value
        );
        if (foundindex > -1) {
            _assignRolesByGroup[foundindex].isAssigned =
                !_assignRolesByGroup[foundindex].isAssigned;
        }
        setAssignRolesByGroup(_assignRolesByGroup);
    };

    const builtDataToSave = () => {
        //! result ={groupId,groupRoles:[{groupId: , roleId: }]}
        let result = {};
        const _assignRolesByGroup = _.cloneDeep(assignRolesByGroup);
        result.groupId = +selectGroup;
        let groupRolesFilter = _assignRolesByGroup.filter(
            role => role.isAssigned === true
        );
        let finalGroupRoles = groupRolesFilter.map(role => {
            let data = { groupId: +selectGroup, roleId: +role.id };
            return data;
        });
        result.groupRoles = finalGroupRoles;
        return result;
    };

    const handleSaveNewRolesToGroup = async () => {
        let data = builtDataToSave();
        let res = await assignRolesToGroup_Client(data);
        if (res && +res.errorCode === 0) {
            toast.success(res.errorMessage);
        } else {
            toast.error(res.errorMessage);
        }
    };

    return (
        <div className="group-role-container">
            <div className="container">
                <div className="mt-2">
                    <h3>Group role</h3>
                    <div className="assign-group-role">
                        <div className="col-6 col-sm-6  form-group ">
                            <label htmlFor="input-gender ">
                                Select Group ({" "}
                                <span className="red-point">*</span> ) :
                            </label>

                            <select
                                className="form-select form-select-md mt-2"
                                aria-label=".form-select-sm example"
                                id="input-group"
                                onChange={e =>
                                    hanleOnchangeGroup(e.target.value)
                                }
                            >
                                <option defaultValue>
                                    Please select your group !
                                </option>
                                {userGroups &&
                                    userGroups.length > 0 &&
                                    userGroups.map((group, index) => {
                                        return (
                                            <option
                                                key={`group-${group.id}`}
                                                value={group.id}
                                            >
                                                {group.name}
                                            </option>
                                        );
                                    })}
                            </select>
                        </div>
                        <hr />
                        {selectGroup ? (
                            <div className="col-12 col-sm-6 form-group roles">
                                <h4>Assign roles:</h4>
                                {assignRolesByGroup &&
                                    assignRolesByGroup.length > 0 &&
                                    assignRolesByGroup.map((role, index) => {
                                        return (
                                            <div
                                                className="form-check"
                                                key={`list-role-${index}`}
                                            >
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={role.id}
                                                    id={`list-role-${index}`}
                                                    checked={role.isAssigned}
                                                    onChange={e =>
                                                        handleSelectRole(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor={`list-role-${index}`}
                                                >
                                                    {role.url}
                                                </label>
                                            </div>
                                        );
                                    })}
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="mt-3">
                            <button
                                className="btn btn-outline-warning"
                                onClick={() => handleSaveNewRolesToGroup()}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupRole;
