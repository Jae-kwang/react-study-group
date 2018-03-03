import { COUNTRY, CAPITAL, REGION, SUBREGION } from '../constants'

export const getTargetValue = (item, type) => {
  let result = '';
  if (type === COUNTRY) {
    result = item.name.official;
  } else if (type === CAPITAL) {
    result = item.name.capital;
  } else if (type === REGION) {
    result = item.region;
  } else if (type === SUBREGION) {
    result = item.subregion;
  }
  return result
}

export function setFilterList (list, type) {
  if (type === COUNTRY) {
    this.setState({ filteredByCountry: list });
  } else if (type === CAPITAL) {
    this.setState({ filteredByCapital: list });
  } else if (type === REGION) {
    this.setState({ filteredByRegion: list });
  } else if (type === SUBREGION) {
    this.setState({ filteredBySubregion: list });
  }
}