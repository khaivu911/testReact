import React, { useEffect, useState } from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg'

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
    console.log(">> call me render")
    useEffect(
        () => {
            if(listUsers.length === 0){
                alert('You deleted all the users')
            }
            console.log(">> call me useEffect")
        },[listUsers]
    );
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" : "Show list users"}
                </span>
            </div>
            {isShowHideListUser &&
                <>
                    {listUsers.map((user) => {
                        // console.log("check: ", user)
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                <div>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    )
}


export default DisplayInfor;