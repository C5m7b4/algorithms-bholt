import { binarySearch } from '../src/BinarySearch/BinarySearch';
import { employees } from '../src/data';
import QuickSortObjArr from '../src/QuickSort/QuickSortObjArr';

test('should find the first record in an array', () => {
  const sorted = QuickSortObjArr(employees, 'firstName');
  const result = binarySearch(sorted, 'firstName', 'alysa');
  expect(result).toEqual({
    guess: 0,
    result: {
      id: 4,
      firstName: 'alysa',
      lastName: 'mitchell',
      age: 19,
      job: 'bagger',
      level: 1,
      hireDate: '2/1/2020',
    },
  });
});

test('should find the sixth record in an array', () => {
  const sorted = QuickSortObjArr(employees, 'firstName');
  const result = binarySearch(sorted, 'firstName', 'paul');
  expect(result).toEqual({
    guess: 6,
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
