//recursive version
export const breadthFirstTraversal = (queue, array) => {
  if (!queue.length) return array;

  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return breadthFirstTraversal(queue, array);
};

// iterative
export const breadthFirstTraversal2 = (queue, array) => {
  if (!queue.length) return array;
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return array;
};
