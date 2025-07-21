import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiServices';
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import ModalCreateUser from "./ModalCreateUser";
import ModalUpdateUser from './ModalUpdateUser';
import ModalViewUser from './ModalViewUser';

const ManageUser = (props) => {
    const [showModalViewUser, setshowModalViewUser] = useState(false);
    const [showModalCreateUser, setshowModalCreateUser] = useState(false);
    const [showModalUpdateUser, setshowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUsers, setListUsers] = useState([])
    const [dataView, setDataView] = useState({});
    

    useEffect(() => {
        fetchListUsers();
    }, []);

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        console.log(res);
        if (res.EC === 0) {
            setListUsers(res.DT)
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
                    <TableUser
                        listUsers={listUsers}
                        handleClickBtnUpdate={handleClickBtnUpdate}
                        handleClickBtnView={handleClickBtnView} />
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
            </div>
        </div>
    )
}
export default ManageUser;