import React, {Component} from 'react';

import './App.css';

class Desc extends Component {
    render() {
        var a = this.props.title
        return (
            <span>{this.props.title}</span>
        )
    }
} 

export default Desc 