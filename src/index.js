console.log('you are ready to start coding...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');
child.innerHTML = 'Hello';
main.appendChild(child);
root.appendChild(main);

// import { crossAdd, find, makeTuples, getMiddleOfArray } from './BigO';
// const myArray = [1, 5, 8, 2, 5, 3, 6, 9];
// console.log(myArray);
// console.log(crossAdd(myArray));
// console.log(find(5, myArray));
// console.log(makeTuples(myArray));
// console.log(getMiddleOfArray(myArray));

import { employees, sortedEmployeesByAge, sortedEmployeesByDate } from './data';
// import BubbleSortObjArr from './BubbleSort/BubbleSortObjArr';
// const sorted = BubbleSortObjArr(employees, 'age', false);
// console.log(sorted);
// const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
// import InsertionSort from './InsertionSort/InsertionSort';
// const sorted = InsertionSort(nums);
// console.log(sorted);
// import InsertionSortObjArr from './InsertionSort/InsertionSortObjArr';
// const sorted = InsertionSortObjArr(employees, 'hireDate', true);
// console.log(sorted);

// import { countTo } from './Recursion/countTo';
// countTo(10, 1);
// import { fibonacci } from './Recursion/fibonacci';

// console.log(fibonacci(100));
// import { add } from './Recursion/add';
// const result = add([[1], [2], [3]]);
// console.log(result);

// import { factorial } from './Recursion/factorial';
// const result = factorial(4);
// console.log(result);

// import MergeSortObjArr from './MergeSort/MergeSortObjArr';
// const sorted = MergeSortObjArr(employees, 'hireDate');
// console.log(sorted);

// import MergeSort from './MergeSort/MergeSort';
// const nums = [3, 5, 1, 7, 6, 9, 2, 4];
// const sorted = MergeSort(nums);
// console.log(sorted);

// import QuickSort from './QuickSort/QuickSort';
// const arr = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
// const result = QuickSort(arr, false);
// console.log(result);

// import QuickSortObjArr from './QuickSort/QuickSortObjArr';
// const sorted = QuickSortObjArr(employees, 'age');
// console.log(sorted);

// const nums = [
//   20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
//   3001, 1200, 633,
// ];
// import RadixSort from './RadixSort/RadixSort';

// const sorted = RadixSort(nums);
// console.log(sorted);

// import QuickSort from './QuickSort/QuickSortObjArr';
// const sorted = QuickSort(employees, 'firstName');
// console.log(sorted);
// import { binarySearch } from './BinarySearch/BinarySearch';
// const result = binarySearch(sorted, 'firstName', 'paul');
// console.log(result);

// import ArrayList from './ArrayList/ArrayList';
// const array = new ArrayList();
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);
// array.push(5);
// array.delete(0);
// console.log(array);

// import LinkedList from './LinkedList/LinkedList';
// const list = new LinkedList();
// list.push(1);
// list.push(2);
// list.push(3);

// const result = list.pop(0);
// console.log(result);

// const item1 = { name: 'betty', age: 18 };
// const item2 = { name: 'tim', age: 20 };
// const list = new LinkedList();
// list.push(item1);
// list.push(item2);

// console.log(list);

// const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
// import BinarySearchTree from './BinarySearchTree/BinarySearchTree';
// const list = new BinarySearchTree();
// nums.map((num) => list.add(num));
// console.log(list);

// import AvlTree from './AvlTree/AvlTree';
// const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
// const tree = new AvlTree();
// nums.map((num) => tree.add(num));
// const objs = tree.toObject();
// console.log(objs);
// console.log(objs.left.left.value);
// console.log(objs.right.left.left);

// const tree = {
//   value: 8,
//   left: {
//     value: 4,
//     left: {
//       value: 3,
//       left: {
//         value: 2,
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//     right: {
//       value: 5,
//       left: null,
//       right: {
//         value: 7,
//         left: {
//           value: 6,
//           left: null,
//           right: null,
//         },
//       },
//     },
//   },
//   right: {
//     value: 12,
//     left: {
//       value: 10,
//       left: {
//         value: 9,
//         left: null,
//         right: null,
//       },
//       right: {
//         value: 11,
//         left: null,
//         right: null,
//       },
//     },
//   },
// };

// import {
//   preOrderTraverse,
//   inOrderTraverse,
//   postOrderTraverse,
// } from './Traversals/DepthFirstSearch';
// console.log(preOrderTraverse(tree, []));
// console.log(inOrderTraverse(tree, []));
// console.log(postOrderTraverse(tree, []));

// import { findShortestPath } from './PathFinding/Pathfinding';

// const fourByFour = [
//   [2, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 2],
// ];

// findShortestPath(fourByFour, [0, 0], [3, 3]);

// import * as _ from 'lodash';
// import { createTrie } from './Tries/Tries';
// import { CITY_NAMES } from './Tries/cities';
// const r = createTrie(CITY_NAMES.slice(0, 10));
// const completions = r.complete('philadelph');
// console.log(completions);

import BloomFilter from './BloomFilters/BloomFilters';
const bf = new BloomFilter();
//debugger;
console.log(bf.contains('Brian'));
bf.add('Brian');
console.log(bf.contains('Brian'));
