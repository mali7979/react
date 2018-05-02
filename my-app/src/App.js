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
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    const activateLasers = () => {
      console.log({listItems})
    }
    return (

      <div className="App">
        <button onClick={activateLasers}>Click To Add</button>
        {listItems}
        <Header welcome={this.state.welcomenote}></Header>
        <Thumbnail number={numbers} ></Thumbnail>


      </div>
    );
  }
}

export default App;
