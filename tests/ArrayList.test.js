import ArrayList from '../src/ArrayList/ArrayList';

let array;

beforeEach(() => {
  array = new ArrayList();
});

test('should test the constructor', () => {
  expect(array).toEqual(expect.any(ArrayList));
});

test('should push an item into our array', () => {
  array.push(1);
  expect(array.length).toEqual(1);
});

test('should pop an item off the array', () => {
  array.push(1);
  array.push(2);
  array.push(3);
  const result = array.pop();
  expect(result).toEqual(3);
});

test('should be able to get an item at an index', () => {
  array.push(1);
  array.push(2);
  array.push(3);
  const result = array.get(1);
  expect(result).toEqual(2);
});

test('should be able to delete an item from our array', () => {
  array.push(1);
  array.push(2);
  array.push(3);
  array.push(4);
  array.push(5);
  array.delete(0); // this should delete the one
  expect(array).toEqual({ data: { 0: 2, 1: 3, 2: 4, 3: 5 }, length: 4 });
});
