import React, { Component } from 'react';

const Put = ({lastname, onchanged}) => {
    return (                                    
        <div>
            {lastname}
            <input type="text"  onChange={onchanged}></input>
        </div>
    )


}
export default Put;


