const convertArrayToObject = (array: any[], key = "id") => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};
export default convertArrayToObject