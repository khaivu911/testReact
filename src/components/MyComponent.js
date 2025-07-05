import React from 'react';
import UserInfor from './UserInfo';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {
    state={
        listUsers: [
            {id: 1, name:"Ronaldo", age:"28"},
            {id: 2, name:"Messi", age:"27"},
            {id: 3, name:"Neymar", age:"24"}
        ]
    }
    // DRY: Don't repeat yourself 
    render() {
        return (
            <div>
                <UserInfor />
                <br></br>

                <DisplayInfor 
                listUsers={this.state.listUsers} 
                />
            </div>
        );
    }
}

export default MyComponent;