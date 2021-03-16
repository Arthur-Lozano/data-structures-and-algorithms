'use strict';

const Node = require('../lib/node');
const ll = require('../lib/linked-list');




function zipLists(list1, list2) {
  let dummynode = new Node();
  let tail = dummynode;

  while (!this.head) {
    if (list1 === null) {
      tail.next = list2;
      break;
    }
    if (list2 === null) {
      tail.next = list1;
      break;
    }
    if (list1.value < list2.value) {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }
  return dummynode.next;
}

module.exports = zipLists;
