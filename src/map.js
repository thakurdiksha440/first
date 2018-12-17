import React, { Component } from 'react';
import Meta from './pos'

class Sums extends Component {
    constructor() {
        super();
        this.state = {
            names: [
                { name: 'vishal', lastname: 'thakur' },
                { name: 'tanu', lastname: 'siani' },
                { name: 'nmn', lastname: 'rajput' }
            ]


        }

    }

    render() {
        return (
            <div>
                {
                     this.state.names.map(function (names , key){
                         return(<Meta key={key} names={names}/>
                             
                         )
                     }
                )}
            </div>
        )
    }
}


export default Sums;