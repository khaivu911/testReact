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
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i am {this.state.age}
                <form onSubmit={(event)=> this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;