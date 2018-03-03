
export const getTargetValue = (item, type) => {
  let result = '';
  if (type === 'country') {
    result = item.name.official;
  } else if (type === 'capital') {
    result = item.name.capital;
  } else if (type === 'region') {
    result = item.region;
  } else if (type === 'subregion') {
    result = item.subregion;
  }
  return result
}