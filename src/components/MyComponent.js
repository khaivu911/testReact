import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfor from './DisplayInfor';
// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Ronaldo", age: "17" },
//             { id: 2, name: "Messi", age: "26" },
//             { id: 3, name: "Neymar", age: "24" }
//         ]
//     }
//     // DRY: Don't repeat yourself 

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUsers;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     render() {
//         const test = 'hocJSX';
//         return (
//             <>
//                 {test}
//                 <br />
//                 <div className='a'>
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br></br>

//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div>
//                 <div className='b'>
//                 </div>
//             </>
//         );
//     }
// }



const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [{ id: 1, name: "Ronaldo", age: "17" },
        { id: 2, name: "Messi", age: "26" },
        { id: 3, name: "Neymar", age: "24" }
        ])
    // DRY: Don't repeat yourself 

    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);
        // this.setState({
        //     listUsers: [userObj, ...this.state.listUsers]
        // })
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)
        setListUsers(listUsersClone)
        // this.setState({
        //     listUsers: listUsersClone
        // })
    }
    return (
        <>
            <br />
            <div className='a'>
                <AddUserInfo
                    handleAddNewUser={handleAddNewUser}
                />
                <br /> 

                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'>
            </div>
        </>
    )
}
export default MyComponent;