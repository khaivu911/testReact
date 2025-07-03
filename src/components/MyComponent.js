import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'Kai',
        address: 'Khai Richard',
        num: 11
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and my nickname is {this.state.address}
            </div>
        );
    }
}

export default MyComponent;