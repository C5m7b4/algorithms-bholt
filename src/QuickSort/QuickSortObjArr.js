const QuickSortObjArr = (arr, key, asc = true, isDate = false) => {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // choose pivot
  const pivot = arr[arr.length - 1];

  // seperate left and right arrays
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (isDate) {
      if (asc) {
        if (new Date(arr[i][key]) < new Date(pivot[key])) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      } else {
        if (new Date(arr[i][key]) > new Date(pivot[key])) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    } else {
      if (asc) {
        if (arr[i][key] < pivot[key]) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      } else {
        if (arr[i][key] > pivot[key]) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
  }
  // call quicksort on left and right arrays
  const leftSorted = QuickSortObjArr(left, key, asc, isDate);
  const rightSorted = QuickSortObjArr(right, key, asc, isDate);

  // return left.concat(pivot, right)
  return leftSorted.concat(pivot).concat(rightSorted);
};

export default QuickSortObjArr;
