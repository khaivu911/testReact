import React from 'react';
import AddUserInfor from './AddUserInfo';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Ronaldo", age: "17" },
            { id: 2, name: "Messi", age: "26" },
            { id: 3, name: "Neymar", age: "24" }
        ]
    }
    // DRY: Don't repeat yourself 

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers:[userObj, ...this.state.listUsers]
        })
    }
    render() {
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>

                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;