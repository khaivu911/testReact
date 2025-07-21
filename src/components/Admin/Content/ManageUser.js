import { useEffect, useState } from 'react';
import { getAllUsers, getUserWithPaginate } from '../../../services/apiServices';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';
import ModalDeleteUser from './ModalDeleteUser';
import TableUserPaginate from './TableUserPaginate';

const ManageUser = (props) => {
    const LIMIT_USER = 7;
    const [pageCount, setPageCount] = useState(0);
    const [showModalViewUser, setshowModalViewUser] = useState(false);
    const [showModalCreateUser, setshowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUsers, setListUsers] = useState([])
    const [dataView, setDataView] = useState({});
    const [dataDelete, setDataDelete] = useState({});
    const [showModalDeleteUser, setshowModalDeleteUser] = useState(false);


    useEffect(() => {
        // fetchListUsers();
        FetchListUsersWithPaginate(1);
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        console.log(res);
        if (res.EC === 0) {
            setListUsers(res.DT)
        }
    }

    const FetchListUsersWithPaginate = async (page) => {
        let res = await getUserWithPaginate(page,LIMIT_USER )
        if (res.EC === 0) {
            console.log(res.DT);
            setListUsers(res.DT.users);
            setPageCount(res.DT.totalPages);
        }
    }

    const handleClickBtnUpdate = (user) => {
        setshowModalUpdateUser(true);
        setDataUpdate(user);
    }
    const resetUpdateData = () => {
        setDataUpdate({});
    }

    const resetViewData = () => {
        setDataView({});
    };

    const handleClickBtnView = (user) => {
        setDataView(user);
        setshowModalViewUser(true);
    };

    const handleClickBtnDelete = (user) => {
        setshowModalDeleteUser(true);
        setDataDelete(user)
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary"
                        onClick={() => setshowModalCreateUser(true)}>
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    {/* <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                    /> */}
                    <TableUserPaginate
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView}
                        handleClickBtnDelete={handleClickBtnDelete}
                        FetchListUsersWithPaginate={FetchListUsersWithPaginate}
                        pageCount={pageCount}
                    />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setshowModalCreateUser}
                    fetchListUsers={fetchListUsers}
                />
                <ModalUpdateUser
                    show={showModalUpdateUser}
                    setShow={setshowModalUpdateUser}
                    dataUpdate={dataUpdate}
                    fetchListUsers={fetchListUsers}
                    resetUpdateData={resetUpdateData}
                />
                <ModalViewUser
                    show={showModalViewUser}
                    setShow={setshowModalViewUser}
                    dataView={dataView}
                    resetViewData={resetViewData}
                />
                <ModalDeleteUser
                    show={showModalDeleteUser}
                    setShow={setshowModalDeleteUser}
                    dataDelete={dataDelete}
                    fetchListUsers={fetchListUsers}
                />
            </div>
        </div>
    )
}
export default ManageUser;