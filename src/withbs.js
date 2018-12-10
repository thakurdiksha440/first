import React, { Component } from 'react';
import pic from './img/shimla-hd-photos.jpg'
import pix from './img/logoWtext.png'
import photo from './img/us.jpg'
import us from './img/why-us.jpg'
import all from './img/daily-loan.jpg'


import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";



class Wbs extends Component {
    render() {
        return (

            <div className="body">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-sm navbar-dark background">
                        <img src={pix} height="100px" width="100px"></img>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Contact us</a>
                            </li>
                        </ul>

                        <button type="button" className="btn btn-warning bu">Login</button>

                        <button type="button" className="btn btn-warning bu">Join Tryment Now</button>

                    </nav>




                    <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                        <CarouselInner>
                            <CarouselItem itemId="1">
                                <View>
                                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                                    <Mask overlay="black-light" />
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Light mask</h3>
                                    <p>First text</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <View>
                                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
                                    <Mask overlay="black-strong" />
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Strong mask</h3>
                                    <p>Second text</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="3">
                                <View>
                                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
                                    <Mask overlay="black-slight" />
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Slight mask</h3>
                                    <p>Third text</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="4">
                                <View>
                                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                                    <Mask overlay="black-light" />
                                </View>
                                <CarouselCaption>
                                    <h3 className="h3-responsive">Sopot Beach</h3>
                                    <p>Taken june 21th by @mattonit</p>
                                </CarouselCaption>
                            </CarouselItem>
                        </CarouselInner>
                    </Carousel>


                    <div className="jumbotron jum">
                        <h1><b>Welcome to Tryment</b></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                    <div className="jumbotron bg">

                        <h3>BANK</h3>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h6>
                    </div>
                    <div className="row">
                        <div className="col-md-3  back">
                            <img src={all} width="100%"></img>
                            <h1> Daily Loan</h1>
                            <p> Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>
                        <div className="col-md-3  back">
                            <img src={all} width="100%"></img>
                            <h1>Weekly Loan</h1>
                            <p> Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>
                        <div className="col-md-3 back">
                            <img src={all} width="100%"></img>
                            <h1>Monthly Loan</h1>
                            <p> Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>
                        <div className="col-md-3  back">
                            <img src={all} width="100%"></img>
                            <h1>Gold Loan</h1>
                            <p> Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={us} width="100%"></img>
                        </div>
                        <div className="col-md-6">
                            <h3><b>Why Tryment</b></h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                            <button type="button" className="btn btn-info ">Read More</button>


                        </div>
                    </div>

                    <div className="well kt">
                        <div className="text-center row p-4">
                            <div className="col-md-5 dk">
                                <h5>CALL US</h5>
                                <p>123456789</p>
                            </div>
                            <div className="col-md-2">
                                <img src={pix} width="150px" height="150px"></img>
                            </div>
                            <div className="col-md-5 dk">
                                <h3>Email Us</h3>
                                <p>INFO@TRYMENT.COM</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <button className="btn btn-outline-info"> Start A New Business </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="list">
                                    <li > Home </li>
                                    <li > Bank </li>
                                    <li > Loan </li>
                                    <li > Business </li>
                                    <li > Line </li>
                                    <li > Contact us </li>
                                </ul>

                            </div>
                            <div className="col-md-12">
                                <h6><b>@ 2018 TRYMENT All Rights Reserved.</b></h6>
                            </div>
                        </div>

                    </div>
    </div>
</div>
                );
            }
        }
        
        export default Wbs;
