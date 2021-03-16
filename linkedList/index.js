'use strict';

let LL = require('./lib/linked-list.js');

let ll = new LL();


ll.append(1);

ll.append(2);

ll.append(3);

ll.append(4);

ll.fromEnd(2);

console.log(ll.fromEnd(1));
// ll.insertFront();
// ll.insertBefore();
// ll.insertAfter(2, 5);
// ll.insertFront();
// ll.include();
// ll.delete();
