import {
  breadthFirstTraversal,
  breadthFirstTraversal2,
} from '../src/BreadthFirstSearch/BreadthFirstSearch';
const tree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: {
        value: 'G',
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 'E',
      left: null,
      right: {
        value: 'H',
        left: {
          value: 'K',
          left: null,
          right: null,
        },
      },
    },
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: {
        value: 'I',
        left: null,
        right: null,
      },
      right: {
        value: 'J',
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

const answer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

test('breadth-first tree traversal', () => {
  expect(breadthFirstTraversal([tree], [])).toEqual(answer);
});

test('breadth-first tree traversal 2', () => {
  expect(breadthFirstTraversal2([tree], [])).toEqual(answer);
});
