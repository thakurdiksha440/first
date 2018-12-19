import React, { Component } from 'react';

class Ands extends Component {
    constructor() {
        super();
        this.state = {
            seem: ['hello', 'how are u'],
            seem1:['do','your', 'work']
        }
        console.log(this.state.seem)
       
    }
     change = () => {

this.setState({seem:[...this.state.seem, this.state.seem1[0]]});
       }
         
    render() {
        return (
            <div>
                {
        console.log('seem', this.state.seem)

                }
           
                <button onClick = {this.change}>clicksssss</button>
                {this.state.seem}

            </div>
        )
    }
}
export default Ands;
