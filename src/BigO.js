function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}
// This is O(n) because we go through all the inputs once in a loop.

function find(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
}
// Still O(n). Unless we say otherwise, we're assuming worst case scenario.
// In this worst case, the needle would be the last element.

function makeTuples(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < input.length; j++) {
      answer.push([input[i], input[j]]);
    }
  }
  return answer;
}
// This would be O(n²).
// For every input, we have to go through a full loop inside of another full loop

function getMiddleOfArray(array) {
  return array[Math.floor(array.length / 2)];
}
// This would be O(1) because no matter how long the array is,
// this still takes the same amount of time to do

export { crossAdd, find, makeTuples, getMiddleOfArray };
