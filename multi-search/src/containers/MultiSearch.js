import React, { Component } from 'react';
import { Header, Fields, List } from '../components'
import _ from 'lodash';

class MultiSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originList: [],
      filteredByCountry: [],
      filteredByCapital: [],
      filteredByRegion: [],
      filteredBySubregion: [] 
    };
    this.filterByType = this.filterByType.bind(this);
  }

  componentWillMount() {
    const API_URL = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json";
    fetch(API_URL)
      .then((resp) => resp.json()) 
      .then((list) => {
        this.setState({
          originList: list,
          filteredByCountry: list,
          filteredByCapital: list,
          filteredByRegion: list,
          filteredBySubregion: list,  
        })
      })
  }

  filterByType(inputValue, filterType) {
    var list = '';
    switch(filterType) {
      case 'country':
        list = this.filterByCountry(inputValue);
        this.setState({ filteredByCountry: list })
        break;
      case 'capital':
        list = this.filterByCapital(inputValue);
        this.setState({ filteredByCapital: list })
        break
      case 'region':
        list = this.filterByRegion(inputValue);
        this.setState({ filteredByRegion: list })
        break;
      case 'subregion':
        list = this.filterBySubregion(inputValue);
        this.setState({ filteredBySubregion: list })
        break;
    }
  }

  filterByCountry(inputValue, target) {
    const originList = this.state.originList; 
    let newList = originList.filter((item) => {
      return item.name.official.match(new RegExp(inputValue, 'gi')); 
    });
    return (!inputValue) ? originList : newList;
  }

  filterByCapital(inputValue) {
    const originList = this.state.originList; 
    let newList = originList.filter((item) => {
      return item.name.capital.match(new RegExp(inputValue, 'gi')); 
    });
    return (!inputValue) ? originList : newList
  }

  filterByRegion(inputValue) {
    const originList = this.state.originList; 
    let newList = originList.filter((item) => {
      return item.region.match(new RegExp(inputValue, 'gi')); 
    });
    return (!inputValue) ? originList : newList
  }

  filterBySubregion(inputValue) {
    const originList = this.state.originList; 
    let newList = originList.filter((item) => {
      return item.subregion.match(new RegExp(inputValue, 'gi')); 
    });
    return (!inputValue) ? originList : newList
  }

  getFilteredList() {
    const { filteredByCountry, filteredByCapital, filteredByRegion, filteredBySubregion } = this.state
    return _.intersection(filteredByCountry, filteredByCapital, filteredByRegion, filteredBySubregion)
  }

  render() {
    return (
      <div>
        <Header>Country/Capital Data Multi-Search Service</Header>
        <Fields filterByType={this.filterByType}/>
        <List list={this.getFilteredList()}/>
      </div>
    );
  }
}

export default MultiSearch;
