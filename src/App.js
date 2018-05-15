import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            numberArray: Array.from({length: 15}, () => Math.floor(Math.random() * 999)),
            newMap: [],
        }
    }

  produceArray(rando) {
      const map = rando.reduce(
          (accumulator, target) => ({ ...accumulator, [target]: (target > 10) }),
          {});

      let arrayFromMap = Object.keys(map).map((key) => {
          return [Number(key), map[key]];
      });

      let newMap = arrayFromMap.map((element) => {
          if (element[1] === false) {
              element[0] = element[0] + 100;
          } else if (element[1] === true) {
              element[0] = element[0] / 2;
          } else {
              console.log('error in if statement');
          }
          return element;
      });
      this.setState({newMap});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <ul>
              {this.state.newMap.map((number) => {
                  return <li key={number}>{number}</li>
              }).filter((test) => test.key.split(',')[0] > 100)}
          </ul>
        <button onClick={() => this.produceArray(Array.from({length: 15}, () => Math.floor(Math.random() * 999)))}>
            Let's go!
        </button>
      </div>
    );
  }
}

export default App;
