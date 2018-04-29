import React, { Component } from 'react';

import './App.css';

import ImgSrc from './ImgSrc';
import Desc from './Desc'

class Thumbnail extends Component {
    render() {
        return (
            <div className="Thumbnail">
                <ImgSrc></ImgSrc>
                <Desc></Desc>
            </div>

        );
    }
}

export default Thumbnail