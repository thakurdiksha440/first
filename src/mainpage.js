import React, { Component } from 'react';
import { element } from 'prop-types';

class Web extends Component {
    constructor(props) {
        super(props); this.state = {
            product: [
                {
                    'id': 1,
                    'url': 'https://images-eu.ssl-images-amazon.com/images/I/41h1DwFsntL._AC_UL260_SR200,260_FMwebp_QL70_.jpg',
                    'title': 'photo1'
                },
                {
                    'id': 2,
                    'url': 'https://images-eu.ssl-images-amazon.com/images/I/51tuXGAPn-L._AC_UL260_SR200,260_FMwebp_QL70_.jpg',
                    'title': 'photo2'
                },
                {
                    'id': 3,
                    'url': 'https://images-eu.ssl-images-amazon.com/images/I/31iYvudN26L._AC_UL260_SR200,260_FMwebp_QL70_.jpg',
                    'title': 'photo3'
                },

            ],
            cart: []
        }
    }

    cartadd = (data) => {
        // add in cart
        var array = this.state.cart
        //  search the array value and what the position of array(index)
        var index = array.indexOf(data)
        
        if (index === -1) {
            this.setState({ cart: [...this.state.cart, data] });
        }
    }

    delete = (data) => {
        var array = this.state.cart
        var index = array.indexOf(data)
                                            
        if (index !== -1) {
            // change the content of an array  by removing  existing element and or adding new element "in sort chnge the nal array"
            array.splice(index);
            this.setState({ cart: array });
        }
    }

    render() {
        return (
            <div className="row text-center ">
                <div className="col-8">
                    < div className="row">

                        {
                            this.state.product.map((index, key) => {
                                return (<div className="col-4" key={key}>
                                    <div className="border mt-4 p-4">
                                        <img alt="no img" src={index.url} /><br />
                                        <p>{index.title}</p>
                                        <button className="btn-danger" onClick={() => this.cartadd(index)}>Add Cart</button>
                                    </div>
                                </div>)
                            }
                            )}
                    </div>

                    {/* <div className="col-6">
                        <div className="border mt-4 p-4">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/I/51tuXGAPn-L._AC_UL260_SR200,260_FMwebp_QL70_.jpg'} /><br />
                            <button className="btn-danger" >Add Cart</button>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="border mt-4 p-4">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/I/31iYvudN26L._AC_UL260_SR200,260_FMwebp_QL70_.jpg'} /><br />
                            <button className="btn-danger">Add Cart</button>
                        </div>
                    </div> */}

                </div>
                <div className="col-4">
                    < div className="row">

                        {
                            this.state.cart.map((index, key) => {
                                return (<div className="col-4" key={key}>
                                    <div className="border mt-4 p-4">
                                        <img alt="no img" src={index.url} height='40px' width='40px' /><br />
                                        <p>{index.title}</p>
                                        <button className="btn-danger" onClick={() => this.delete(index)}>Remove</button>
                                    </div>
                                </div>)
                            }
                            )}
                    </div>


                </div>
            </div>
        )
    }
}
export default Web;
