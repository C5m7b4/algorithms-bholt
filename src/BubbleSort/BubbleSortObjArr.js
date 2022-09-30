const BubbleSortObjArr = (arr, key) => {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1]) {
        if (arr[i][key] > arr[i + 1][key]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    }
  } while (swapped);
  return arr;
};

export default BubbleSortObjArr;
