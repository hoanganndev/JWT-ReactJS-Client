import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import {
    fetchAllUsers_Client,
    deleteUser_Client,
} from "../../services/userService_Client";
import ModalDelete from "./ModalDelete";
import ModalUser from "./ModalUser";
import "./Users.scss";

const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(0);
    // Check show for model delete
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [dataModalDelete, setDataModalDelete] = useState({}); // User is deleted
    // Check show for model user
    const [isShowModalUser, setIsShowModalUser] = useState(false);
    const [dataModalUser, setDataModalUser] = useState({}); // User data to update
    // Action to know that when we're need update or create new user
    const [actionModalUser, setActionModalUser] = useState("CREATE");
    useEffect(() => {
        fetchAllUsers();
    }, [currentPage]);

    const fetchAllUsers = async () => {
        let res = await fetchAllUsers_Client(currentPage, currentLimit);
        if (res && +res.errorCode === 0) {
            if (res.data.totalPages && res.data.users) {
                setTotalPages(res.data.totalPages);
                setUsersList(res.data.users);
            } else {
                setUsersList(res.data);
            }
        }
    };

    // ReactPaginate function
    const handlePageClick = async e => {
        setCurrentPage(+e.selected + 1);
    };

    // Delete user
    const handleDeleteUser = async user => {
        setDataModalDelete(user);
        setIsShowModalDelete(true); // Open modal
    };

    const handleCloseModelDelete = () => {
        setIsShowModalDelete(false); // Close modal
        setDataModalDelete({});
    };

    const confirmDeleteUser = async () => {
        let res = await deleteUser_Client(dataModalDelete);
        if (res && res.errorCode === 0) {
            toast.success(res.errorMessage);
            await fetchAllUsers(); // Fetch new users list
            setIsShowModalDelete(false);
            setDataModalDelete({});
        } else {
            toast.error(res.errorMessage);
        }
    };

    const onShowCreateUserModal = () => {
        setActionModalUser("CREATE");
        setIsShowModalUser(true);
    };

    const handleEditUser = user => {
        setActionModalUser("UPDATE");
        setDataModalUser(user);
        setIsShowModalUser(true);
    };

    const onHideModalUser = async () => {
        setDataModalUser({});
        setIsShowModalUser(false);
        await fetchAllUsers();
    };

    const handleRefresh = async () => {
        setUsersList([]);
        await fetchAllUsers();
    };

    return (
        <>
            <div className="container">
                <div className="manage-users-container">
                    <div className="user-header">
                        <div className="mt-2 tabel-users">
                            <h3>Tabel Users</h3>
                        </div>
                        <div className="actions">
                            <button
                                className="btn btn-outline-success mb-3"
                                onClick={() => handleRefresh()}
                            >
                                <span>
                                    <i
                                        className="fa fa-refresh"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                                <span className="ms-1">Refesh</span>
                            </button>
                            <button
                                className="btn btn-outline-info ms-3 mb-3"
                                onClick={() => onShowCreateUserModal()}
                            >
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
                                <tr className="table-warning">
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
                                {usersList && usersList.length > 0 ? (
                                    <>
                                        {usersList.map((user, index) => {
                                            return (
                                                <tr key={`user-${user.id}`}>
                                                    <td>
                                                        {(currentPage - 1) *
                                                            currentLimit +
                                                            index +
                                                            1}
                                                    </td>
                                                    <td>{user.id}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.username}</td>
                                                    <td>
                                                        {user.Group
                                                            ? user.Group.name
                                                            : ""}
                                                    </td>
                                                    <td className="text-center">
                                                        <div
                                                            className="btn-group"
                                                            role="group"
                                                        >
                                                            <button
                                                                type="button"
                                                                title="Edit user"
                                                                className="btn btn-outline-warning rounded-3"
                                                                onClick={() =>
                                                                    handleEditUser(
                                                                        user
                                                                    )
                                                                }
                                                            >
                                                                <i
                                                                    className="fa fa-pencil edit-icon"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                title="Delete user"
                                                                className="btn btn-outline-danger ms-4 rounded-3"
                                                                onClick={() =>
                                                                    handleDeleteUser(
                                                                        user
                                                                    )
                                                                }
                                                            >
                                                                <i
                                                                    className="fa fa-trash-o delete-icon"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <>
                                        <tr>
                                            <td>Not Found Users</td>
                                        </tr>
                                    </>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="user-footer">
                        {totalPages && totalPages > 0 && (
                            <ReactPaginate
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={2}
                                pageCount={totalPages}
                                previousLabel="< previous"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                breakLabel="..."
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                containerClassName="pagination"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                        )}
                    </div>
                </div>
            </div>
            <ModalDelete
                show={isShowModalDelete}
                handleClose={handleCloseModelDelete}
                confirmDeleteUser={confirmDeleteUser}
                dataModalDelete={dataModalDelete}
            />
            <ModalUser
                onHide={onHideModalUser}
                show={isShowModalUser}
                action={actionModalUser}
                dataModalUser={dataModalUser}
            />
        </>
    );
};
export default Users;
