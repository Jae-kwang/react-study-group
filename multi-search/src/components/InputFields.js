import React, { Component } from 'react';

class InputFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFieldsList: [
        {country: { placeholder: 'Filter by Country'}},
        {capital: { placeholder: 'Filter by Capital'}},
        {region: { placeholder: 'Filter by Region'}},
        {subregion: { placeholder: 'Filter by Subregion'}}
      ]
    }
  }
    
  render() {
    let name = '';
    return (
      <div>
        {
          this.state.inputFieldsList.map((item, idx) => {
            name = Object.keys(item)  
            return <input key={idx} type="text" name={name}
              placeholder={item[name].placeholder}
              onChange={this.props.handleChange} />
          })
        }
      </div>
    )
  }
}

export default InputFields;