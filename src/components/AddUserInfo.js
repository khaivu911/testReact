import React from 'react';

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'Khai Richard',
        age: ''
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        });
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and i am {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>My name: </label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeInput(event)} />

                    <label>My age: </label>
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;