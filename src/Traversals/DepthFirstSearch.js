const preOrderTraverse = (node, array) => {
  if (!node) return array;
  array.push(node.value);
  array = preOrderTraverse(node.left, array);
  array = preOrderTraverse(node.right, array);
  return array;
};

const inOrderTraverse = (node, array) => {
  if (!node) return array;
  array = inOrderTraverse(node.left, array);
  array.push(node.value);
  array = inOrderTraverse(node.right, array);
  return array;
};

const postOrderTraverse = (node, array) => {
  if (!node) return array;
  array = postOrderTraverse(node.left, array);
  array = postOrderTraverse(node.right, array);
  array.push(node.value);
  return array;
};

export { preOrderTraverse, inOrderTraverse, postOrderTraverse };
