import React, { Component } from 'react';
import { InputFields, List } from '../components'

class FilterContainers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  originList = [];

  componentDidMount() {
    const API_URL = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((list) => {
        this.originList = list; 
        this.setState({ list });
      })
  }

  handleChange(e) {
    const { name, value } = e.target;
    const filter = Object.assign({}, {[name]:value})
    const list = this.filteringFactory(filter);
    this.setState({ list })
  }

  filteringFactory(filter) {
    const { country = '', capital = '', region = '', subregion = '' } = filter;
    let list = this.originList.filter((item, i) => {
      let countryFilter = item.name.official.match(new RegExp(country), 'gi') ;
      let capitalFilter = item.capital.join('').match(new RegExp(capital), 'gi');
      let regionFilter = item.region.match(new RegExp(region), 'gi');
      let subregionFilter = item.subregion.match(new RegExp(subregion), 'gi'); 
      return (countryFilter && capitalFilter && regionFilter && subregionFilter) ? item : '';
    })
    return list;
  }

  render() {
    return (
      <section>
        <InputFields handleChange={this.handleChange} />
        <List list={this.state.list}/>
      </section>
    );
  }
}

export default FilterContainers;
