import React, { Component } from 'react';
import Meta from './pos'

class Sums extends Component {
    constructor() {
        super();
        this.state = {
            names: [
                { name: 'amn' },
                { name: 'asf' },
                { name: 'nmn' }
            ]


        }

    }

    render() {
        return (
            <div>
                {
                     this.state.names.map(function (names , key){
                         return(<Meta key={key} names={names.name}/>
                             
                         )
                     }
                )}
            </div>
        )
    }
}


export default Sums;