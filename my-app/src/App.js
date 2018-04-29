import React, { Component } from 'react';
import Header from './Header';
import Thumbnail from './Thumbnail';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Thumbnail></Thumbnail>
      </div>
    );
  }
}

export default App;
