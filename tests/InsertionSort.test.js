import InsertionSort from '../src/InsertionSort/InsertionSort';

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

test('should return an ordered array of numbers in ascending order', () => {
  const sorted = InsertionSort(nums);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should return an ordered array of number in descending order', () => {
  const sorted = InsertionSort(nums, false);
  expect(sorted).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});
