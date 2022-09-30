import InsertionSort from '../src/InsertionSort/InsertionSort';
import InsertionSortObjArr from '../src/InsertionSort/InsertionSortObjArr';
import {
  employees,
  sortedEmployeesByAge,
  sortedEmployeesByAgeDesc,
  sortedEmployeesByFirstName,
  sortedEmployeesByFirstNameDesc,
  sortedEmployeesByDate,
  sortedEmployeesByDateDesc,
} from '../src/data';

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

test('should return an ordered array of numbers in ascending order', () => {
  const sorted = InsertionSort(nums);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should return an ordered array of number in descending order', () => {
  const sorted = InsertionSort(nums, false);
  expect(sorted).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

test('should return an ordered array of objects', () => {
  const sorted = InsertionSortObjArr(employees, 'age');
  expect(sorted).toEqual(sortedEmployeesByAge);
});

test('should return an ordered array of objects descending', () => {
  const sorted = InsertionSortObjArr(employees, 'age', false);
  expect(sorted).toEqual(sortedEmployeesByAgeDesc);
});

test('should return an ordered array of objects by string ascending', () => {
  const sorted = InsertionSortObjArr(employees, 'firstName');
  expect(sorted).toEqual(sortedEmployeesByFirstName);
});

test('should return an ordered array of objects by string descending', () => {
  const sorted = InsertionSortObjArr(employees, 'firstName', false);
  expect(sorted).toEqual(sortedEmployeesByFirstNameDesc);
});

test('should return an ordered array of objects by date ascending', () => {
  const sorted = InsertionSortObjArr(employees, 'hireDate', true, true);
  expect(sorted).toEqual(sortedEmployeesByDate);
});

test('should return an ordered array of objects by date descending', () => {
  const sorted = InsertionSortObjArr(employees, 'hireDate', false, true);
  expect(sorted).toEqual(sortedEmployeesByDateDesc);
});
