import React, { Component } from 'react';
import logo from './img/n.jpg';
import './App.css';

class Bs extends Component {
  render() {
    return (
      <div>
        <div className="d1">

          <div className="d2">
            <div className="header">
              <img class="img" src={logo}></img>
              <p className="im">Because the image has a z-index of -1.</p>
            </div>
            <ul className="list">
              <li>Home</li>
              <li>Service</li>
              <li>Dropdown</li>
              <li>Contact</li>
              <li>Register</li>
            </ul>
            <div className="fon">
              <p > <font size="6"><b>Connect Digital</b> </font></p>
              <p > <font size="6"><b>Content With </b></font></p>
              <p > <font size="6"><b>The Real Word</b></font></p>
            </div>
          </div>
          <div className="d3">
            <div className="c1">
              <p><font size="5"><b>Responsive Layout</b></font></p>
              <p><i>JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a
              language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
            Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web<button type="submit">Read More</button></i></p>

            </div>
            <div className="c2">
              <p><font size="5"><b>Front Awesome Icon</b></font></p>
              <p>JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a
              language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
            Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web<button type="submit">Read More</button></p>
            </div>
            <div className="c3">
              <p><font size="5"><b>Front Awesome Icon</b></font></p>
              <p>JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a
              language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
            Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web<button type="submit">Read More</button></p>
            </div>

          </div>

          <div className="d4">

            <div className="f1">
              <ul className="g">
                <li><b>Account Settings</b></li>
                <li>Can't Change My Username</li>
                <li>How secure is my Password</li>
                <li>Where can't I upload My Avatar</li>
                <button type="submit"> View All </button>
              </ul>
            </div>
            <div className="f2">
              <ul className="g1">
                <li><b>API QUESTIONS</b></li>
                <li>What technologies are used</li>
                <li>What are the API Limits?</li>
                <li>Why was my Developer Application Rejected?</li>
                <button type="submit">View All</button>
              </ul>
            </div>
            <div className="f3">
              <p><b>Support Policy</b></p>
              <p> <font size="4">In computing, React is a JavaScript library for building user interfaces. </font></p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Bs;
