import React from 'react';

const Fields = ({filterByType}) => {
  return (
    <div>
      <input type="text"placeholder="Filter by Country"
        onChange={(e) => filterByType(e.target.value, 'country')}></input>
      <input type="text" placeholder="Filter by Capital"
        onChange={(e) => filterByType(e.target.value, 'capital')}></input>
      <input type="text" placeholder="Filter by Region"
        onChange={(e) => filterByType(e.target.value, 'region')}></input>
      <input type="text" placeholder="Filter by Subregion"
        onChange={(e) => filterByType(e.target.value, 'subregion')}></input>
    </div>
  )
};

export default Fields;