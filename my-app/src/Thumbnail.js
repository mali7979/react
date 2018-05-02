import React, { Component } from 'react';

import './App.css';

import ImgSrc from './ImgSrc';
import Desc from './Desc'

class Thumbnail extends Component {
    render() {

        return (
            <div>
                <ul>
                   {this.props.number.map((number) =>
                        <li className="Thumbnail">{number}
                            <ImgSrc></ImgSrc>
                            <Desc></Desc>
                        </li>

                    )}

                </ul>
            </div>

        );
    }
}

export default Thumbnail