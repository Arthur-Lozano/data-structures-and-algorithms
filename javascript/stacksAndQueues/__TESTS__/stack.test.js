'use strict';

const Stack = require('../stack/stack');
let s = new Stack;

describe('Can successfully push onto a stack', () => {
  it('Can successfully push multiple values onto a stackk', () => {

    s.push(1);// [ 1 ]
    s.push(2);// [ 1, 2 ]
    expect(s.storage).toEqual([1,2]);
  });

  it('Can successfully pop off the stack', () => {

    s.pop();
    expect(s.storage).toEqual([1]);
  });

  it('Can successfully empty a stack after multiple pops', () => {

    s.pop();
    s.pop();
    expect(s.storage).toEqual([]);
  });

  it('Can successfully peek the next item on the stack', () => {

    s.peek();
    expect(s.storage).toEqual(s.next);
  });


  it('Can successfully instantiate an empty stack', () => {

    let thisNew = new Stack;
    expect(thisNew).toBe(Stack);
  });

  // it('Calling pop or peek on empty stack raises exception', () => {

  //   let thisNew = new Stack;
  //   expect(s.storage).toEqual(Stack);
  // });

});
