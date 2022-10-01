class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    // add an item to the end of the array
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    // remove the last item in the array
    const result = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return result;
  }

  get(index) {
    return this.data[index];
  }

  length() {
    return this.length;
  }

  delete(index) {
    // removes item from the array and collapses the array
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

export default ArrayList;
