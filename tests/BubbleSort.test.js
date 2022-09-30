import BubbleSort from '../src/BubbleSort/BubbleSort';

test('should return true', () => {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNumber = BubbleSort(nums);
  expect(sortedNumber).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
