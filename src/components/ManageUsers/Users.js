import React from "react";
import "./Users.scss";
const Users = () => {
    return (
        <>
            <div className="container">
                <div className="manage-users-container">
                    <div className="user-header">
                        <div className="mt-2 tabel-users">
                            <h3>Tabel Users</h3>
                        </div>
                        <div className="actions">
                            <button className="btn btn-outline-success mb-3">
                                <span>
                                    <i
                                        className="fa fa-refresh"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                                <span className="ms-1">Refesh</span>
                            </button>
                            <button className="btn btn-outline-info ms-3 mb-3">
                                <span>
                                    <i
                                        className="fa fa-plus"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                                <span className="ms-1"> Add new user</span>
                            </button>
                        </div>
                    </div>
                    <div className="user-body table-responsive">
                        <table className="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">NO</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Group</th>
                                    <th scope="col" className="text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>check1</td>
                                    <td>check1</td>
                                    <td>check1</td>
                                    <td>check1</td>
                                    <td>check1</td>
                                    <td className="text-center">
                                        <div className="btn-group" role="group">
                                            <button
                                                type="button"
                                                title="Edit user"
                                                className="btn btn-outline-warning"
                                            >
                                                <i
                                                    className="fa fa-pencil edit-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                            <button
                                                type="button"
                                                title="Delete user"
                                                className="btn btn-outline-danger ms-4"
                                            >
                                                <i
                                                    className="fa fa-trash-o delete-icon"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Users;
