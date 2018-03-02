import React from 'react';

const Row = ({item}) => {
  // console.log(item);
  return (
    <tr>
      <td>{item.name.official.slice(0,30)}</td>
      <td>{item.capital}</td>
      <td>{item.region}</td>
      <td>{item.subregion}</td>
      <td>{item.latlng[0].toFixed(2)}</td>
      <td>{item.latlng[1].toFixed(2)}</td>
    </tr>
  )
};

const List = ({list}) => {
  return (
    <table>
      <thead>
         <tr>
          <th className="country">Country</th>
          <th className="capital">Capital</th>
          <th className="region">Region</th>
          <th className="subregion">Subregion</th>
          <th className="lat">Latitude</th>
          <th className="lon">Longitude</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((item, idx) => {
            return <Row item={item} key={idx}/>
          })
        }
      </tbody>
    </table>
  )
};

export default List;