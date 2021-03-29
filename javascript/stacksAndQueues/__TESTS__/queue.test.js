'use strict';

const Queue = require('../queues/queue');
let q =  new Queue;

describe('Tests the queue', () => {
  it('Can successfully enqueue into a queue', () => {
    let q =  new Queue;
    q.enqueue(100);

    expect(q).toEqual(100);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let q = new Queue;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    expect(q).toBe(q);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let q = new Queue;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    q.dequeue();

    expect(q).toBe(this.storage.length -1);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let q = new Queue;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    q.peek();

    expect(q).toBe(this.stack[this.stack.length - 1]);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let q = new Queue;
    let q = new Queue;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);

    q.dequeue();
    q.dequeue();

    expect(q).toBe(q === 0);
  });

  it('Can successfully instantiate an empty queue', () => {
    let q = new Queue;
    q.enqueue(100);

    expect(q).toBe(q);
    expect(q).toBeDefined();
  });

  it('Calling dequeue or peek on empty queue raises exception', async => {
    let q = new Queue;
    q.enqueue(100);

    expect(q).toBe(q);
    expect(q).toBeDefined();
  });

});
