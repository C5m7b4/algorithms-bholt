import { linearSearch } from '../src/LinearSearch.js/LinearSearch';
import { employees } from '../src/data';
import { linearSearchObjArr } from '../src/LinearSearch.js/LinearSearchObjArr';

test('should find our item in an array', () => {
  const arr = [5, 3, 8, 2, 9, 10];
  const result = linearSearch(arr, 3);
  expect(result).toEqual({ index: 1, result: 3 });
});

test('should find our item in an array', () => {
  const arr = [5, 3, 8, 2, 9, 10];
  const result = linearSearch(arr, 9);
  expect(result).toEqual({ index: 4, result: 9 });
});

test('should find paul', () => {
  const result = linearSearchObjArr(employees, 'firstName', 'paul');
  expect(result).toEqual({
    index: 4,
    result: {
      id: 5,
      firstName: 'paul',
      lastName: 'jefferson',
      age: 24,
      job: 'receiver',
      level: 3,
      hireDate: '1/1/2019',
    },
  });
});
