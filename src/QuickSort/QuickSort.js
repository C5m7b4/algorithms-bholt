const QuickSort = (arr) => {
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
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // call quicksort on left and right arrays
  // const leftSorted = QuickSort(left);
  // const rightSorted = QuickSort(right);

  // return left.concat(pivot, right)
  // return leftSorted.concat(pivot).concat(rightSorted);
  return [...QuickSort(left), pivot, ...QuickSort(right)];
};

export default QuickSort;
