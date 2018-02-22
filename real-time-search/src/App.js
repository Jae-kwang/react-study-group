import React, { Component } from 'react';
import './App.css';
import list from './list'

class App extends Component {

  state = {
    list
  }

  handleChange = (e) => {
    const originList = list;
    const inputValue = e.target.value;    

    if (inputValue !== '') {
      let newList = originList.filter((value) => {
        return value.match(new RegExp(inputValue, 'gi')); 
      })
      this.setState({list: newList})
    } else {
      this.setState({list: originList}) 
    }
  } 

  render() {
    const { list } = this.state
    const { handleChange } = this
    return (
      <div>
        <h3>Search:</h3>
        <input type="text" placeholder="Search the list with React"
          onChange={handleChange}/>
        <ul>
          {
            list.map((item, idx) => {
              return <li key={idx}>{item}</li>   
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
