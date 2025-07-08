import React, { useState } from 'react';
import './DisplayInfor.scss';
import logo from './../logo.svg'

// stateless vs stateful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log(">>>>call me render")
//         // const  listUsers = this.props.listUsers;
//         const { listUsers } = this.props;
//         // console.log(listUsers)
//         return (
//             <div className='display-infor-container'>
//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             // console.log("check: ", user)
//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                                     <div style={{ color: 'purple', paddingTop: '10px' }} >My name's {user.name}</div>
//                                     <div>My age's {user.age}</div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr></hr>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true); 
    const handleShowHideListUser = () =>{
        setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={()=> handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide list users" :"Show list users"}
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