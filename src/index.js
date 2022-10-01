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

const nums = [
  20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34, 3000,
  3001, 1200, 633,
];
import RadixSort from './RadixSort/RadixSort';
debugger;
const sorted = RadixSort(nums);
console.log(sorted);
