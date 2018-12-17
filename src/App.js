import React, { Component } from 'react';
import './App.css';
import Human from './person'
import Som from './map'
import Nom from './stateprop'
import See from './setstate'

class App extends Component {
    state = {
        per: [
            { name: 'shilpa', age: 23, rollNo: 1 },
            { name: 'diksha', age: 21, rollNo: 2 },
            { name: 'tanu', age: 18, rollNo: 3 }
        ],
        otherState: 'some other value'
    }
    switchNameHandler = (newName) => {
        this.setState({
            per: [
                { name: 'Tanu', age: 18, rollNo: 3 },
                { name: newName, age: 23, rollNo: 1 },
                { name: 'DIKSHA', age: 21, rollNo: 2 }
            ]
        })
    }


    render() {
        return (
            <div className="App">

                <Som />
                <Nom />
                <See />

                <button onClick={() => this.switchNameHandler('diksha!!')}>Click</button>

                <Human name={this.state.per[0].name} age={this.state.per[0].age} rollNo={this.state.per[0].rollNo} />

                <Human name={this.state.per[1].name} age={this.state.per[1].age} rollNo={this.state.per[1].rollNo} />

                <Human name={this.state.per[2].name} age={this.state.per[2].age} rollNo={this.state.per[2].rollNo} />

                <Human otherdata={this.state.otherState} age="22"></Human>



            </div>


        );
    }
}

export default App;
