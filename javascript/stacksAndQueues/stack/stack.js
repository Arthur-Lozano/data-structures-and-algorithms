'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }


  //Push the item to the top of the stack
  push(item) {
    this.storage.push(item);
    this.top = item;
    return this;
  }


  pop() {
    this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
    return this;
  }


  peek() {
    return this.top;
  }


  isEmpty(){
    if(this.storage.length === 0){
      return this.storage.length;
    } else{
      return 'this is not empty';
    }
  }
}


module.exports = Stack;

// let q = new Stack;

// q.push(70);
// q.isEmpty();
// console.log(q);
