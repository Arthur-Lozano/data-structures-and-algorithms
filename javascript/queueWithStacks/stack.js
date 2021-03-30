'use strict';

class Stack {
  constructor() {
    this.storage = [];
  }
  push(item) {
    this.storage.push(item);
    this.top = item;
    return this;
  }
  pop() {
    let x = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
    return x;
  }
  peek() {
    if (!this.top) {
      return false;
    }
    return this.top;
  }
  isEmpty() {
    if (!this.top) {
      return true;
    }
  }
}

module.exports = Stack;