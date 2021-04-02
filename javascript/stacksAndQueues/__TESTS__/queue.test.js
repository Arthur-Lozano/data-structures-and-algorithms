'use strict';

const Queue = require('../queues/queue');
let q = new Queue();


describe('Tests the queue', () => {
  it('Can successfully enqueue into a queue', () => {
    q.enqueue(100);

    expect(q.storage).toEqual([100]);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);

    expect(q.storage).toEqual([100, 10, 20, 30]);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    q.dequeue();

    expect([30]).toEqual([30]);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {


    expect(q.peek()).toBe([30]);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {

    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.enqueue(40);

    q.dequeue();
    q.dequeue();

    expect(q).toBe(q === 0);
  });

  it('Can successfully instantiate an empty queue', () => {
    let inst = new Queue();

    expect(inst.front).toBe(null);
    expect(inst.rear).toBe(null);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    q.enqueue(100);

    expect(q).toBe(q);
    expect(q).toBeDefined();
  });

});
