import RadixSort from '../src/RadixSort/RadixSort';

const nums = [
  20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
  3001, 1200, 633,
];

test('should sort an array of numbers ascending', () => {
  const sorted = RadixSort(nums);
  expect(sorted).toEqual([
    1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
    1200, 1244, 3000, 3001,
  ]);
});
