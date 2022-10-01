export function add(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (Array.isArray(current)) {
      sum += add(current);
    } else {
      sum += current;
    }
  }

  return sum;
}
