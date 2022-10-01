const QuickSort = (arr, asc = true) => {
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
    if (asc) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    } else {
      if (arr[i] > pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  // call quicksort on left and right arrays
  const leftSorted = QuickSort(left, asc);
  const rightSorted = QuickSort(right, asc);

  // return left.concat(pivot, right)
  return leftSorted.concat(pivot).concat(rightSorted);
  // if (asc) {
  //   return [...QuickSort(left, asc), pivot, ...QuickSort(right, asc)];
  // } else {
  //   return [...QuickSort(right, asc), pivot, ...QuickSort(left, asc)];
  // }
};

export default QuickSort;
