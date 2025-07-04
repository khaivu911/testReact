import React from 'react';
import UserInfor from './UserInfo';
import DisplayInfor from './DisplayInfor';
class MyComponent extends React.Component {

    render() {
        return (
            <div>
                <UserInfor />
                <br></br>
                <DisplayInfor name="KhaiVu911" age="30" />
                <hr></hr>
                <DisplayInfor name="Kevin" age={27} />
            </div>
        );
    }
}

export default MyComponent;