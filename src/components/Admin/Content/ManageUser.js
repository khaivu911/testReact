import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiServices';    
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import ModalUpdateUser from './ModalUpdateUser';

const ManageUser = (props) => {

    const [showModalCreateUser, setshowModalCreateUser] = useState(false);
    const [showModalUpdateUser ,setshowModalUpdateUser] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [listUsers, setListUsers] = useState([])

    useEffect(()=>{
        fetchListUsers();
    },[]);

    const fetchListUsers = async() => {
        let res = await getAllUsers()
        console.log(res);
        if(res.EC === 0){
            setListUsers(res.DT)
        }
    }
    const handleClickBtnUpdate=(user) => {
        setshowModalUpdateUser(true);
        setDataUpdate(user);
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
                    <TableUser 
                    listUsers={listUsers}
                    handleClickBtnUpdate={handleClickBtnUpdate}/>
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
                />
            </div>
        </div>
    )
}
export default ManageUser;