import React, { Component } from 'react';
import './App.css';
import FilterContainers from './containers/FilterContainers';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1 className="title">Country/Capital Data Multi-Search Service</h1>
        </header>
        <FilterContainers />
      </div> 
    );
  }
}

export default App;
