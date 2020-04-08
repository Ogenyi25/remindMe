import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        console.log('this.state', this.state);
    }


    render() {
        return (
            <div className="App">
                <div className="title">
                    REMIND ME
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className="form-control"
                        placeholder="I have to ..."
                        onChange={event => this.setState({text: event.target.value})}
                        />
                    </div>
                    <button className="btn btn-success"
                    onClick={() => this.addReminder()}
                    >
                    Add Reminder</button>
                </div>
            </div>
        )
    }
}

export default App;