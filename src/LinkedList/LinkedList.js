import Node from './Node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _find(index) {
    if (index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i <= index - 1; i++) {
      current = current.next;
    }
    return current;
  }
  get(index) {
    const node = this._find(index);
    if (!node) return void 0;
    return node.value;
  }
  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
      }
      this.length--;
      return head.value;
    }

    const node = this._find(index - 1);
    const excise = node.next;
    if (!excise) return null;

    node.next = excise.next;
    if (!node.next) {
      this.tail = node.next;
    }
    this.length--;
    return excise.value;
  }
}

export default LinkedList;
