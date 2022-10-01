// this must be a sorted array

const binarySearch = (array, key, value) => {
  let min = 0;
  let max = array.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (array[guess][key] === value) {
      return { guess, result: array[guess] };
    } else {
      if (array[guess][key] < value) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }

  return void 0;
};

export { binarySearch };
