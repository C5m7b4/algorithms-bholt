import BubbleSort from '../src/BubbleSort/BubbleSort';
import BubbleSortObjArr from '../src/BubbleSort/BubbleSortObjArr';
import { employees, sortedEmployeesByAge } from '../src/data';

test('should return [1,2,3,4,5,6,7,8,9,10]', () => {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNumber = BubbleSort(nums);
  expect(sortedNumber).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should return an ordered array of objects', () => {
  const sorted = BubbleSortObjArr(employees, 'age');
  expect(sorted).toEqual(sortedEmployeesByAge);
});
