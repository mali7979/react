import React, {Component} from 'react';

import './App.css';

class Desc extends Component {
    render() {
        const title = "Title"
        console.log(this.props)
        return (
            <span>{title}</span>
        )
    }
} 

export default Desc 