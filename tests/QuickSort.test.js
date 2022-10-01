import QuickSort from '../src/QuickSort/QuickSort';

const arr = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
test('should return an ordered array of numbers', () => {
  const sorted = QuickSort(arr);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
