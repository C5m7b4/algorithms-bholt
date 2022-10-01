const InsertionSortObjArr = (arr, key, asc = true, isDate = false) => {
  for (let i = 1; i < arr.length; i++) {
    const valueToInsert = arr[i];
    let j;
    if (isDate) {
      if (asc) {
        for (
          j = i - 1;
          arr[j] &&
          new Date(arr[j][key]) > new Date(valueToInsert[key]) &&
          j >= 0;
          j--
        ) {
          arr[j + 1] = arr[j];
        }

        arr[j + 1] = valueToInsert;
      } else {
        for (
          j = i - 1;
          arr[j] &&
          new Date(arr[j][key]) < new Date(valueToInsert[key]) &&
          j >= 0;
          j--
        ) {
          arr[j + 1] = arr[j];
        }

        arr[j + 1] = valueToInsert;
      }
    } else {
      if (asc) {
        for (
          j = i - 1;
          arr[j] && arr[j][key] > valueToInsert[key] && j >= 0;
          j--
        ) {
          arr[j + 1] = arr[j];
        }

        arr[j + 1] = valueToInsert;
      } else {
        for (
          j = i - 1;
          arr[j] && arr[j][key] < valueToInsert[key] && j >= 0;
          j--
        ) {
          arr[j + 1] = arr[j];
        }

        arr[j + 1] = valueToInsert;
      }
    }
  }
  return arr;
};

export default InsertionSortObjArr;
