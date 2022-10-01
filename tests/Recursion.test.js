import { fibonacci } from '../src/Recursion/fibonacci';
import { add } from '../src/Recursion/add';
import { factorial } from '../src/Recursion/factorial';

test('should return 1', () => {
  expect(fibonacci(1)).toEqual(1);
});

test('should return 1', () => {
  expect(fibonacci(2)).toEqual(1);
});

test('should return 2', () => {
  expect(fibonacci(3)).toEqual(2);
});

test('should return 3', () => {
  expect(fibonacci(4)).toEqual(3);
});

test('should return 5', () => {
  expect(fibonacci(5)).toEqual(5);
});

test('should return 8', () => {
  expect(fibonacci(6)).toEqual(8);
});

test('should return 13', () => {
  expect(fibonacci(7)).toEqual(13);
});

test('should return 21', () => {
  expect(fibonacci(8)).toEqual(21);
});

test('should equal 6', () => {
  expect(add([1, 2, 3])).toEqual(6);
});

test('should equal 6', () => {
  expect(add([1, [2], 3])).toEqual(6);
});

test('should equal 6', () => {
  expect(add([[[[[[6]]]]]])).toEqual(6);
});

test('should equal 10', () => {
  expect(add([[1], 2, [4, 3]])).toEqual(10);
});

test('should equal 1', () => {
  expect(factorial(1)).toEqual(1);
});

test('should equal 2', () => {
  expect(factorial(2)).toEqual(2);
});

test('should equal 6', () => {
  expect(factorial(3)).toEqual(6);
});

test('should equal 3628800', () => {
  expect(factorial(10)).toEqual(3628800);
});
