import MergeSort from '../src/MergeSort/MergeSort';
import MergeSortObjArr from '../src/MergeSort/MergeSortObjArr';
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

test('should return an ordered list of number', () => {
  expect(MergeSort(nums)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should return an orders list of number in descending order', () => {
  expect(MergeSort(nums, false)).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

test('should return an ordered list of objects from an array by specifying the key', () => {
  const sorted = MergeSortObjArr(employees, 'age');
  expect(sorted).toEqual(sortedEmployeesByAge);
});

test('should return an ordered list of objects from an array by specifying the key in a desending order', () => {
  const sorted = MergeSortObjArr(employees, 'age', false);
  expect(sorted).toEqual(sortedEmployeesByAgeDesc);
});

test('should return an orders list of objects from an array using a string ascending', () => {
  const sorted = MergeSortObjArr(employees, 'firstName');
  expect(sorted).toEqual(sortedEmployeesByFirstName);
});

test('should return an ordered list of object from and array using a string descending', () => {
  const sorted = MergeSortObjArr(employees, 'firstName', false);
  expect(sorted).toEqual(sortedEmployeesByFirstNameDesc);
});

test('should return an ordered list of objects from an array using a date ascending', () => {
  const sorted = MergeSortObjArr(employees, 'hireDate', true, true);
  expect(sorted).toEqual(sortedEmployeesByDate);
});

test('should return an ordered list of objects from an array using a date descending', () => {
  const sorted = MergeSortObjArr(employees, 'hireDate', false, true);
  expect(sorted).toEqual(sortedEmployeesByDateDesc);
});
