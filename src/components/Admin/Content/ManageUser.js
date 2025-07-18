import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

const ManageUser = (props) => {

    const [showModalCreateUSer, setshowModalCreateUSer] = useState(false);

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary"
                        onClick={() => setshowModalCreateUSer(true)}>
                        <FcPlus /> Add new users
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser/>
                </div>
                <ModalCreateUser
                    show={showModalCreateUSer}
                    setShow={setshowModalCreateUSer}
                />
            </div>
        </div>
    )
}
export default ManageUser;