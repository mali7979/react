import React, { Component } from 'react';
import logo from './logo.svg';

import Search from './Search'

import './App.css';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="App-title">{this.props.welcome}</h1>
                <Search></Search>
            </header>
        );
    }
}

export default Header