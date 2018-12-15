import React, { Component } from 'react';

class Net extends Component {

    render() {
        return (
            <div onClick={() => this.props.clickfun(this.props.sprop)}>
                {this.props.sprop.name}
            </div >
        )
    }
}
export default Net;