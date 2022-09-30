const InsertionSort = (arr, asc = true) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j;

    if (asc) {
      for (j = i - 1; arr[j] > numberToInsert && j >= 0; j--) {
        arr[j + 1] = arr[j]; // moving the number backwards in the array
      }

      arr[j + 1] = numberToInsert;
    } else {
      for (j = i - 1; arr[j] < numberToInsert && j >= 0; j--) {
        arr[j + 1] = arr[j]; // moving the number backwards in the array
      }

      arr[j + 1] = numberToInsert;
    }
  }

  return arr;
};

export default InsertionSort;
