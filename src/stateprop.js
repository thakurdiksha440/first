import React, { Component } from 'react';
import Net from './propstate'
import { Row, Col } from 'mdbreact'

class States extends Component {
    constructor() {
        super();
        this.state = {
            sprop: [
                {
                    name: 'diksha',
                    lastname: 'thakur',
                    class: '12th',
                    rollno: 1,
                    moblieno: 123456

                },
                {
                    name: 'shilpa',
                    lastname: 'verma',
                    class: '10th',
                    rollno: 2,
                    moblieno: 98765432

                },
                {

                    name: 'tamu',
                    lastname: 'sharma',
                    class: '11th',
                    rollno: 3,
                    moblieno: 6754838
                }
            ]


        }

    }
    user = (data) => {
        if (data) {
            this.setState({
                data
            })
        }
    }
    render() {
        return (
                          

            <div>
                {
                    this.state.sprop.map((index, key) => {
                        return (<Net clickfun={this.user} key={key} sprop={index} />
                        )

                    }

                    )
                }
                {
                    this.state.data && <Row style={{ width:'300px',backgroundColor: 'blue'}}>
                        <Col md='6'>
                            Name :-
                        </Col>
                        <Col md='6'>
                            {this.state.data.name} {this.state.data.lastname}
                        </Col>
                        <Col md='6'>
                            Class :-
                        </Col>
                        <Col md='6'>
                            {this.state.data.class}
                        </Col>
                        <Col md='6'>
                            Roll No:-
                        </Col>
                        <Col md='6'>
                            {this.state.data.rollno}
                        </Col>
                        <Col md='6'>
                            Mobile:-
                        </Col>
                        <Col md='6'>
                            {this.state.data.moblieno}
                        </Col>

                    </Row>



                }
            </div>

        )
    }
}
export default States;