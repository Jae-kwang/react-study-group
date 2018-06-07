import React, { Component } from 'react'
import './App.css'

import marked from 'marked'

class App extends Component {

  state = {
    context: ''
  }

  handleChange = (e) => {
    this.setState({ context: e.target.value })
  }
 
  createMarkup = (context) => {
    return {__html: marked(context)}
  };
  
  render() {
    const { handleChange, createMarkup } = this
    const { context } = this.state

    return (
      <div className="App">
        <textarea cols="30" rows="10"onChange={handleChange} value={context}/> 
        <div className="Previewer" dangerouslySetInnerHTML={createMarkup(context)} />
      </div>
    )
  }
}

export default App
