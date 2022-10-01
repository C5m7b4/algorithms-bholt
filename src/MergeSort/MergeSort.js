const merge = (left, right) => {
  // these are already sorted
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return results.concat(left, right);
};

const MergeSort = (arr) => {
  // base case, return if length 1 or 0
  if (arr.length < 2) {
    return arr;
  }

  // break into two smaller arrays
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // call merge sort on left and right
  const sortedLeft = MergeSort(left);
  const sortedRight = MergeSort(right);
  // return the merge of left and right
  return merge(sortedLeft, sortedRight);
};

export default MergeSort;
