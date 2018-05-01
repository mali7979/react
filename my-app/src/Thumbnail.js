import React, { Component } from 'react';

import './App.css';

import ImgSrc from './ImgSrc';
import Desc from './Desc'

class Thumbnail extends Component {
    render() {
        
        return (
            <div className="Thumbnail">
            <h1></h1>
                <ImgSrc></ImgSrc>
                <Desc title={this.props.title}></Desc>
            </div>

        );
    }
}

export default Thumbnail