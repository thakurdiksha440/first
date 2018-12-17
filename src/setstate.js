import React, { Component } from 'react';
import Put from './event'


class Exx extends Component {
    state = {
        per: [
            { name: 'manisha' },
            {lastname: 'thakur'}
        ]
    }
      
    nameChangedHandler = (event) => {
        this.setState({
            per: [
                { name: 'manisha' },
                {lastname: event.target.value}
            ]

        })
    }
    render() {
        return (
            <div>
            
            <Put lastname={this.state.per[1].lastname} onchanged={this.nameChangedHandler} />


            </div>


        )
    }
}
export default Exx;