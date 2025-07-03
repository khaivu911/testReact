import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'Kai',
        address: 'Khai Richard',
        age: 11
    }

    handleClick = (event) => {
        console.log(">> Click my button")


        this.setState(
            {
                name: 'Havertz',
                age: Math.floor((Math.random() * 100) + 1)

            }
        )
    }

    handleOnMouseOver(event) {
        // console.log(event.pageX)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i am {this.state.age}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;