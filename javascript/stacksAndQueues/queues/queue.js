'use strict';

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {
    //pushes the item to an array
    this.storage.push(item);

    //If we just added the first item, set it as the front and the rear
    if (this.storage.length === 1) {
      this.front = item;
      this.rear = item;

      //otherewise, set the front and rear to their actual position
    } else {
      this.rear = item;
    }
  }

  dequeue() {
    if (!this.storage.length) {
      return 'empty queue';
    }
    let item = this.storage.shift();

    if (this.storage.length === 0) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.storage[0];
      this.rear = this.storage[this.storage.length - 1];
    }
    return item;//give me back my dequeued item
  }

  peek() {
    return this.front;
  }

  isEmpty() {
    if (this.storage === 0) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Queue;


// let q = new Queue;
// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// q.dequeue();

// console.log(q);
