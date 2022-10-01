// number = 1391
// place = 0
// longestNumber = 4
// should return 1
const getDigit = (number, place, longestNumber) => {
  const string = number.toString();
  const size = string.length;
  const mod = longestNumber - size;
  return string[place - mod] || 0;
};

const getLongestNumber = (array) => {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
};

const RadixSort = (arr) => {
  // find longest number
  const longestNumber = getLongestNumber(arr);
  // create how any buckets you need
  const buckets = new Array(10).fill().map(() => []);

  // for loop or how many iterations you need to do
  for (let i = longestNumber - 1; i >= 0; i--) {
    // enqueue the numbers into their buckets
    while (arr.length) {
      const current = arr.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }
    // for loop for each bucket
    for (let j = 0; j < 10; j++) {
      // dequeue all of the items out of the bucket
      while (buckets[j].length) {
        arr.push(buckets[j].shift());
      }
    }
  }
  return arr;
};

export default RadixSort;
