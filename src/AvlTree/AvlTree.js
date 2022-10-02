// https://codesandbox.io/s/algorithms-exercises-8kdjr?file=/specs/avl/avl.solution.test.js
import Node from './Node';

class AvlTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
  }

  toJson() {
    return JSON.stringify(this.root.serialize(), null, 4);
  }

  toObject() {
    return this.root.serialize();
  }
}

export default AvlTree;
