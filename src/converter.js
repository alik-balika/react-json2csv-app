/**
 * this is 100% not perfect and I will hopefully get around to making a proper json to csv converter
 *
 * Has the following issues:
 * - doesn't support nested objects
 * - doesn't support nested arrays
 * - the headers are just created from the first object in the array
 * - regular array input like [1,2,3] or even mixed array input like [1,false,"test",Object] wont work
 */

const convertJSONtoCSV = (JSONData) => {
  if (!Array.isArray(JSONData)) {
    return convertJSONObjectToCSV(JSONData);
  }

  let array = JSONData;

  let csv = "";
  let line = "";

  for (let index in array[0]) {
    let value = index + "";
    line += '"' + value.replace(/"/g, '""') + '",';
  }

  line = line.slice(0, -1);
  csv += line + "\r\n";

  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (let index in array[i]) {
      console.log(index, typeof array[i][index]);
      if (typeof array[i][index] === "object") {
        return "NESTED_OBJECT_ERROR";
      }

      let value = array[i][index] + "";
      if (isNaN(value)) {
        line += '"' + value.replace(/"/g, '""') + '",';
      } else {
        line += array[i][index] + ",";
      }
    }

    line = line.slice(0, -1);
    csv += line + "\r\n";
  }

  return csv;
};

const convertJSONObjectToCSV = (JSONData) => {
  if (Object.values(JSONData).some((value) => typeof value === "object")) {
    return "NESTED_OBJECT_ERROR";
  }

  let csv = "";
  Object.keys(JSONData).forEach((key, index) => {
    csv += key + (index === Object.keys(JSONData).length - 1 ? "\n" : ",");
  });

  Object.values(JSONData).forEach((value, index) => {
    csv += value + (index === Object.values(JSONData).length - 1 ? "\n" : ",");
  });

  return csv;
};

export default convertJSONtoCSV;
