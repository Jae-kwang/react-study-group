import React, { Component } from 'react';
import { Header, InputFields, List } from '../components'

class FilterContainers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originList: [],
      filteredList: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const API_URL = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";
    fetch(API_URL)
      .then((resp) => resp.json())
      .then((list) => {
        this.setState({
          originList: list,
          filteredList: list 
        });
      })
  }

  handleChange(e) {
    const { name, value } = e.target;
    const filter = Object.assign({}, {[name]:value})
    this.filteringFactory(filter);
  }

  filteringFactory(filter) {
    const { originList } = this.state
    const { country = '', capital = '', region = '', subregion = '' } = filter;
     
    let filteredList = originList.filter((item, i) => {
      let countryFilter = item.name.official.match(new RegExp(country), 'gi') ;
      let capitalFilter = item.capital.join('').match(new RegExp(capital), 'gi');
      let regionFilter = item.region.match(new RegExp(region), 'gi');
      let subregionFilter = item.subregion.match(new RegExp(subregion), 'gi'); 
      
      if (countryFilter && capitalFilter && regionFilter && subregionFilter) {
        return item;
      }
    })
    this.setState({ filteredList });
  }

  render() {
    return (
      <section>
        <InputFields handleChange={this.handleChange} />
        <List list={this.state.filteredList}/>
      </section>
    );
  }
}

export default FilterContainers;
