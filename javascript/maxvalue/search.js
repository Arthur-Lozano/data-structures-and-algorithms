'use strict';

let node1 = {
  data: 1,
  left: referenceToLeftNode,
  right: referenceToRightNode
};

var queue = [];


queue.push(100);                      // queue is now [1]
queue.push(200);                      // queue is now [1, 2]
var topOfQueueValue = queue.shift();
console.log(topOfQueueValue)        // returns 1 
console.log(queue)                  // returns [2]


function levelOrderSearch(rootNode) {

  if (rootNode === null) {
    return;
  }

  var queue = [];
  queue.push(rootNode);

  while (queue.length > 0) {
    var currentNode = queue[0];

    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    queue.shift();
  }

}



levelOrderSearch();