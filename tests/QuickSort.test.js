import QuickSort from '../src/QuickSort/QuickSort';
import QuickSortObjArr from '../src/QuickSort/QuickSortObjArr';
import {
  employees,
  sortedEmployeesByAge,
  sortedEmployeesByAgeDesc,
  sortedEmployeesByFirstName,
  sortedEmployeesByFirstNameDesc,
  sortedEmployeesByDate,
  sortedEmployeesByDateDesc,
} from '../src/data';

const arr = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
test('should return an ordered array of numbers', () => {
  const sorted = QuickSort(arr);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('should return an ordered array of number in descending order', () => {
  const sorted = QuickSort(arr, false);
  expect(sorted).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
});

test('should return an ordered array from an array of objects in ascending order by the objects key', () => {
  const sorted = QuickSortObjArr(employees, 'age');
  expect(sorted).toEqual(sortedEmployeesByAge);
});

test('should return an ordered array from an arry of objects in descending order by the objects key', () => {
  const sorted = QuickSortObjArr(employees, 'age', false);
  expect(sorted).toEqual(sortedEmployeesByAgeDesc);
});

test('should return an ordered array from an array of objects in ascending order by firstName', () => {
  const sorted = QuickSortObjArr(employees, 'firstName');
  expect(sorted).toEqual(sortedEmployeesByFirstName);
});

test('should return an ordered array from an array of objects in descending order by firstName', () => {
  const sorted = QuickSortObjArr(employees, 'firstName', false);
  expect(sorted).toEqual(sortedEmployeesByFirstNameDesc);
});

test('should return an orderd array from an array of object by date ascending', () => {
  const sorted = QuickSortObjArr(employees, 'hireDate', true, true);
  expect(sorted).toEqual(sortedEmployeesByDate);
});

test('should return an orderd array from an array of object by date desceding', () => {
  const sorted = QuickSortObjArr(employees, 'hireDate', false, true);
  expect(sorted).toEqual(sortedEmployeesByDateDesc);
});
