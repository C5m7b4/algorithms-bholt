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

import { employees } from './data';
// import BubbleSortObjArr from './BubbleSort/BubbleSortObjArr';
// const sorted = BubbleSortObjArr(employees, 'age', false);
// console.log(sorted);
const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
import InsertionSort from './InsertionSort/InsertionSort';
const sorted = InsertionSort(nums);
console.log(sorted);
