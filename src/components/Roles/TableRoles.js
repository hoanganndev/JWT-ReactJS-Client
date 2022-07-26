import React, {
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from "react";
import {
    deteteRole_Client,
    fetchAllRoles_Client,
    updateCurrentRole_Client,
} from "../../services/roleService_Client";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import _ from "lodash";

const TableRoles = forwardRef((props, ref) => {
    const [listRoles, setListRoles] = useState([]);
    const [editRole, setEditRole] = useState({});
    // React Paginate
    const [currentPage, setCurrentPage] = useState(1); //{role.id}
    const [currentLimit, setCurrentLimit] = useState(3);
    const [totalPages, setTotalPages] = useState(0);

    // ReactPaginate
    const handlePageClick = async e => {
        setCurrentPage(+e.selected + 1);
    };

    useEffect(() => {
        fetchRoles();
    }, [currentPage]);

    const fetchRoles = async () => {
        let res = await fetchAllRoles_Client(currentPage, currentLimit);
        if (res && +res.errorCode === 0) {
            setTotalPages(res.data.totalPages);
            setListRoles(res.data.roles);
        }
    };

    useImperativeHandle(ref, () => ({
        reFreshListRoles() {
            fetchRoles();
        },
    }));

    const handleDeleteRole = async role => {
        if (
            window.confirm(`Are you sure you wish to delete role ${role.url}`)
        ) {
            let res = await deteteRole_Client(role);
            if (res && +res.errorCode === 0) {
                await fetchRoles();
                toast.success(res.errorMessage);
            } else {
                toast.error(res.errorMessage);
            }
        } else {
            this.onCancel();
        }
    };

    const handleOnchangeEditRole = (key, value) => {
        let _editRole = _.cloneDeep(editRole);
        _editRole[key] = value;
        setEditRole(_editRole);
    };

    const handleEditRole = async role => {
        let _editRole = _.cloneDeep(editRole);
        let _listRoles = _.cloneDeep(listRoles);
        let isEmptyObject = Object.keys(editRole).length === 0;
        if (isEmptyObject === false && _editRole.id === role.id) {
            let objectIndex = _listRoles.findIndex(item => item.id === role.id);
            _listRoles[objectIndex] = _editRole;
            let res = await updateCurrentRole_Client(_editRole);
            if (res && res.errorCode === 0) {
                toast.success(res.errorMessage);
                setListRoles(_listRoles);
                setEditRole({});
            }
        } else {
            setEditRole(role);
        }
    };
    return (
        <>
            <table className="table table-hover table-bordered mt-3 ">
                <thead>
                    <tr className="table-warning">
                        <th scope="col">NO</th>
                        <th scope="col">Id</th>
                        <th scope="col">URL</th>
                        <th scope="col">Description</th>
                        <th scope="col" className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listRoles && listRoles.length > 0 ? (
                        <>
                            {listRoles.map((role, index) => {
                                return (
                                    <tr key={`role-${role.id}`}>
                                        <td>
                                            {(currentPage - 1) * currentLimit +
                                                index +
                                                1}
                                        </td>
                                        <td>{role.id}</td>
                                        {editRole.id === role.id ? (
                                            <>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control col-auto"
                                                        placeholder={role.url}
                                                        onChange={e =>
                                                            handleOnchangeEditRole(
                                                                "url",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control col-auto "
                                                        placeholder={
                                                            role.description
                                                        }
                                                        onChange={e =>
                                                            handleOnchangeEditRole(
                                                                "description",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td>{role.url}</td>
                                                <td>{role.description}</td>
                                            </>
                                        )}
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <span
                                                    title={
                                                        editRole.id
                                                            ? "Save"
                                                            : "Edit"
                                                    }
                                                    className="edit"
                                                    onClick={() =>
                                                        handleEditRole(role)
                                                    }
                                                >
                                                    {editRole.id === role.id ? (
                                                        <i
                                                            className="fa fa-floppy-o save"
                                                            aria-hidden="true"
                                                        ></i>
                                                    ) : (
                                                        <i
                                                            className="fa fa-pencil"
                                                            aria-hidden="true"
                                                        ></i>
                                                    )}
                                                </span>
                                                <span
                                                    title="Delete"
                                                    className="delete ms-4"
                                                    onClick={() =>
                                                        handleDeleteRole(role)
                                                    }
                                                >
                                                    <i className="fa fa-trash-o"></i>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            <tr>
                                <td colSpan={5} className="text-center">
                                    Not Found Roles
                                </td>
                            </tr>
                        </>
                    )}
                </tbody>
            </table>
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
        </>
    );
});

export default TableRoles;
