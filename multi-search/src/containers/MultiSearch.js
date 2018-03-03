import React, { Component } from 'react';
import { Header, Fields, List } from '../components'
import _ from 'lodash';

import { getTargetValue } from'../filter'

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
    const list = this.getFilteredList(inputValue, filterType)
    this.setFilterList(list, filterType);
  }

  getFilteredList(inputValue, filterType) {
    const originList = this.state.originList; 
    let newList = originList.filter((item) => {
      return getTargetValue(item, filterType).match(new RegExp(inputValue, 'gi')); 
    });
    return (!inputValue) ? originList : newList; 
  };

  setFilterList(list, type) {
    if (type ==='country') {
      this.setState({ filteredByCountry: list });
    } else if (type === 'capital') {
      this.setState({ filteredByCapital: list });
    } else if (type === 'region') {
      this.setState({ filteredByRegion: list });
    } else if (type === 'subregion') {
      this.setState({ filteredBySubregion: list });
    }
  }

  // 필터링을 통해 얻은 리스트들을 최종적으로 교집합 하여 리스트를 얻음
  getIntersectionList() {
    const { filteredByCountry, filteredByCapital, filteredByRegion, filteredBySubregion } = this.state
    return _.intersection(filteredByCountry, filteredByCapital, filteredByRegion, filteredBySubregion)
  }

  render() {
    return (
      <div>
        <Header>Country/Capital Data Multi-Search Service</Header>
        <Fields filterByType={this.filterByType}/>
        <List list={this.getIntersectionList()}/>
      </div>
    );
  }
}

export default MultiSearch;
