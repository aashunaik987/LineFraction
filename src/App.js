import React, { Component } from 'react';
import NumberLine from './FractionLine';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <div style={{display: "flex", justifyContent : "center", alignItems : "center"}}>
      <h1>Fraction Line App</h1>
      </div>
      <NumberLine />
    </div>
    );
  }
}

export default App;
