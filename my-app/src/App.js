import React, { Component } from 'react';
import Thumbnail from './Thumbnail';
import Header from './Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomenote: 'React'
    }
  }
  render() {

    const title = "Video Description";

    return (

      <div className="App">

        <Header welcome={this.state.welcomenote}></Header>
        <Thumbnail title={title}></Thumbnail>
        <Thumbnail title={title}></Thumbnail>
        <Thumbnail title={title}></Thumbnail>


      </div>
    );
  }
}

export default App;
