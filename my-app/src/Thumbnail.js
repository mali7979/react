import React, { Component } from 'react';

import './App.css';

import ImgSrc from './ImgSrc';
import Desc from './Desc'

class Thumbnail extends Component {
    
    constructor(props){
        super()
        this.state = {
            myNum : props.number
        }
        
       
        console.log('State:' + this.state);
    }
    updateThumb = () => {
        let num = this.state.myNum;
        num.push([])
        this.setState ({num})
        console.log(this.state)
    }
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
                <button onClick={this.updateThumb}>Click</button>
            </div>

        );
    }
}

export default Thumbnail