import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'Kai',
        address: 'Khai Richard',
        num: 11
    }

    handleClick(event) {
        console.log(">> Click my button")
        console.log("My name is", this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and my nickname is {this.state.address}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;