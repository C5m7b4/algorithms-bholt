import LinkedList from '../src/LinkedList/LinkedList';

let list;

beforeEach(() => {
  list = new LinkedList();
});

test('should test constructor', () => {
  expect(list).toEqual(expect.any(LinkedList));
});

test('should properly push an object into our linked list', () => {
  list.push(1);
  list.push(2);
  expect(list.length).toEqual(2);
});

test('should properly pop and object off our list', () => {
  list.push(1);
  list.push(2);
  list.push(3);
  const result = list.pop();
  expect(list.length).toEqual(2);
  expect(result).toEqual(3);
});

test('should be able to get a value from our linkedList', () => {
  list.push(1);
  list.push(2);
  list.push(3);
  expect(list.get(1)).toEqual(2);
  expect(list.get(2)).toEqual(3);
});

test('should be able to delete a node', () => {
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.delete(2);
  expect(list.length).toEqual(3);
});
