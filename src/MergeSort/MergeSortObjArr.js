const merge = (left, right, key, asc = true, isDate = false) => {
  const result = [];
  while (left.length && right.length) {
    if (asc) {
      if (isDate) {
        if (new Date(left[0][key]) <= new Date(right[0][key])) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      } else {
        if (left[0][key] <= right[0][key]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
    } else {
      if (isDate) {
        if (new Date(left[0][key]) >= new Date(right[0][key])) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      } else {
        if (left[0][key] >= right[0][key]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }
    }
  }

  return result.concat(left, right);
};

const MergeSortObjArr = (arr, key, asc = true, isDate = false) => {
  if (arr.length < 2) {
    return arr;
  }

  // break it into two halves
  const length = arr.length;
  const middle = Math.floor(length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = MergeSortObjArr(left, key, asc, isDate);
  const sortedRight = MergeSortObjArr(right, key, asc, isDate);

  return merge(sortedLeft, sortedRight, key, asc, isDate);
};

export default MergeSortObjArr;
