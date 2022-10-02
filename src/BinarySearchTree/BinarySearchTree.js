import Node from './Node';

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    // if this is the root
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;
      while (true) {
        if (current.value > value) {
          // go left
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            break;
          }
        } else {
          // go right
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this; // the actual tree
  }

  toObject() {
    return this.root;
  }
}

export default BinarySearchTree;
