'use strict';

// pull in the Node Class -> this will give us the ability
// to instantiate (add) new nodes to our linked list
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }


  includes(value) {
    if (!this.head) {
      return false;
    } else {
      if (this.head.value === value) {
        return true;
      }

      let current = this.head;

      while (current.next) {
        current = current.next;
        if (current.value === value) {
          return true;
        }
      }

      return false;
    }
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    return this;
  }


  insertBefore(value, newVal) {
    let node = new Node(newVal);

    if (!this.head) {
      this.head = node;
      return this;//returns entire link list
    } else {
      //Save old head
      let oldNode = this.head;
      //Replace current head
      this.head = node;//This.head gets nodes value
      //Set next value of head to old head
      this.head.next = oldNode;
    }
  }


  insertAfter(value, newVal) {
    let current = this.head;
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      while (current) {//current is an object. with value and next property
        if(current.value === value)
        node.next = current.next;
        current.next = node;//current.next gets entire new node {value:999, next 200}
        return this;
      } 
  }


  toString() {
    let string = '';
    let current = this.head;
    while (current) {
      string += `{ ${current.value} } -> `;

      current = current.next;
    }

    string += 'NULL';
    return string;
  }
}


module.exports = LinkedList;