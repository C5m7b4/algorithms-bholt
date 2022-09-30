import BubbleSort from '../src/BubbleSort/BubbleSort';
import BubbleSortObjArr from '../src/BubbleSort/BubbleSortObjArr';
import {
  employees,
  sortedEmployeesByAge,
  sortedEmployeesByFirstName,
  sortedEmployeesByLastName,
} from '../src/data';

test('should return [1,2,3,4,5,6,7,8,9,10]', () => {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNumber = BubbleSort(nums);
  expect(sortedNumber).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should return an ordered array of objects by age', () => {
  const sorted = BubbleSortObjArr(employees, 'age');
  expect(sorted).toEqual(sortedEmployeesByAge);
});

test('should return and orderd array of objects by first name', () => {
  const sorted = BubbleSortObjArr(employees, 'firstName');
  expect(sorted).toEqual(sortedEmployeesByFirstName);
});

test('should return and orderd array of objects by last name', () => {
  const sorted = BubbleSortObjArr(employees, 'lastName');
  expect(sorted).toEqual(sortedEmployeesByLastName);
});
