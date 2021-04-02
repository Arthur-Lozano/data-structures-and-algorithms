
'use strict';

const Dog = require('../dog');
const Cat = require('../cat');

const AnimalShelter = require('../fifo-animal-shelter');

describe('Tests the queue', () => {
  it('Can successfully enqueue into a queue', () => {

    let q = new AnimalShelter;

    const fido = new Dog('Fido', 'Mixed');
    const rex = new Dog('rex', 'Mixed');
    const lemon = new Dog('lemon', 'Mixed');

    const nat = new Cat('nat', 'Mixed');
    const talia = new Cat('talia', 'Mixed');

    q.enqueue(rex);
    q.enqueue(fido);
    q.enqueue(nat);


    q.dequeue(lemon);
    q.dequeue(nat);
    q.dequeue(talia);
    expect(q).toEqual(Dog);
  });

  it('Can successfully enqueue multiple values into a queue', () => {

    let q = new AnimalShelter;

    const fido = new Dog('Fido', 'Mixed');
    const rex = new Dog('rex', 'Mixed');

    const nat = new Cat('nat', 'Mixed');
    const talia = new Cat('talia', 'Mixed');

    q.enqueue(fido);
    q.enqueue(nat);
    q.enqueue(rex);
    q.enqueue(talia);



    expect(q).toBe(q);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let q = new AnimalShelter;

    const fido = new Dog('Fido', 'Mixed');
    const rex = new Dog('rex', 'Mixed');
    const lemon = new Dog('lemon', 'Mixed');

    const nat = new Cat('nat', 'Mixed');
    const talia = new Cat('talia', 'Mixed');


    q.enqueue(fido);
    q.enqueue(rex);
    q.enqueue(lemon);
    q.enqueue(nat);
    q.enqueue(talia);

    q.dequeue(lemon);
    q.dequeue(nat);
    q.dequeue(talia);

    expect(q).toBe(this.shelter.length - 3);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let q = new AnimalShelter;

    const fido = new Dog('Fido', 'Mixed');
    const rex = new Dog('rex', 'Mixed');
    const lemon = new Dog('lemon', 'Mixed');

    const nat = new Cat('nat', 'Mixed');
    const talia = new Cat('talia', 'Mixed');


    q.enqueue(fido);
    q.enqueue(rex);
    q.enqueue(lemon);
    q.enqueue(nat);
    q.enqueue(talia);

    q.dequeue(lemon);
    q.dequeue(nat);
    q.dequeue(talia);


    q.peek();

    expect(q).toBe(this.stack[this.shelter.length - 1]);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let q = new AnimalShelter;

    const fido = new Dog('Fido', 'Mixed');
    const rex = new Dog('rex', 'Mixed');
    const lemon = new Dog('lemon', 'Mixed');

    const nat = new Cat('nat', 'Mixed');
    const talia = new Cat('talia', 'Mixed');


    q.enqueue(fido);
    q.enqueue(rex);
    q.enqueue(lemon);
    q.enqueue(nat);
    q.enqueue(talia);

    q.dequeue(lemon);
    q.dequeue(nat);
    q.dequeue(talia);
    q.dequeue(rex);
    q.dequeue(fido);



    expect(q).toBe(q === 0);
  });

  it('Can successfully instantiate an empty queue', () => {
    let q = new AnimalShelter;

    expect(q).toEqual({ AnimalShelter });
  });

});
