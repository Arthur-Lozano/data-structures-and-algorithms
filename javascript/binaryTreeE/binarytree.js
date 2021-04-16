'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];

    _walk = node => {
      nodes.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return nodes;
  }


  inOrder() {

    let nodes = [];

    //Helper function that is scoped to the wrapperfunction (recursion)
    let _walk = node => {
      if (node.left) { _walk(node.left); }
      nodes.push(node.value);
      if (node.right) { _walk(node.right); }
    }

    //Starts the process
    _walk(this.root);

    return nodes;
  }

  //In order without a helper(this.root)
  inOrderWithoutHelper(node, nodes = []) {
    //Traverse
    if (node.left) { this.inOrderWithoutHelper(node.left, nodes); }
    //Do The Work
    nodes.push(node.value);
    //Traverse
    if (node.right) { this.inOrderWithoutHelper(node.right, nodes); }

    return nodes;
  }

  postOrder() {
    let nodes = [];
    let _walk = node => {
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      nodes.push(node.value);
    }
    _walk(this.root);

    return nodes;
  }

  breadthFirst() {
    let nodes = [];
    let queue = [];

    queue.push(this.root);//queue.enqueue();

    while (queue.lenght) {//while q.peek
      //Do the work
      let currentNode = queue.shift();//queue.dequeue();
      nodes.push(currentNode.value);

      //continue traversing by queing up the left to right

      if (currentNode.left) { queue.push(currentNode.left) };
      if (currentNode.right) { queue.push(currentNode.right) }
    }
    return nodes;
  }
}


class BinarySearchTree extends BinaryTree {
  add(value) {
    //Logic goes here
    let newNode = new Node(value);
    if (!this.root) {
      this.root = new Node;
      return this;
    }

    let current = this.root;
    while (current) {
      if (value === current.value) { return undefined }
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) { return false }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = current;
      }
    }

    if (!found) {
      return true;
    } else {
      return undefined;
    }
    // return true;
  }
}


console.log(BinaryTree);