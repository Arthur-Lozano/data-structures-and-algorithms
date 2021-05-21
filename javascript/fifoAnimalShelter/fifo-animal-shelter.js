'use strict';


class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}


class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
    this.shelter = [];
  }

  enqueue(animal) {
    //pushes the item to an array
    this.shelter.push(animal);

    //If we just added the first item, set it as the front and the rear
    if (this.shelter.length === 1) {
      this.front = animal;
      this.rear = animal;

      //otherewise, set the front and rear to their actual position
    } else {
      this.rear = animal;
    }
  }

  dequeue(pref) {
    if (!this.shelter.length || pref === !Cat && !Dog) {
      return 'empty queue';
    }
    let animal = this.shelter.shift();

    if (this.shelter.length === 0) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.shelter[0];
      this.rear = this.shelter[this.shelter.length - 1];
    }
    return animal;//give me back my dequeued animal
  }

  peek() {
    return this.front;
  }

  isEmpty() {
    if (this.shelter === 0) {
      return true;
    } else {
      return false;
    }
  }

}

module.exports = AnimalShelter;

// const fido = new Dog('Fido', 'Mixed');
// const rex = new Dog('rex', 'Mixed');
// const lemon = new Dog('lemon', 'Mixed');

// const nat = new Cat('nat', 'Mixed');
// const talia = new Cat('talia', 'Mixed');



// let q = new Queue;
// q.enqueue(fido);
// q.enqueue(nat);
// q.enqueue(talia);
// q.enqueue(rex);
// q.enqueue(lemon);

// q.dequeue(lemon);
// q.dequeue(nat);
// q.dequeue(talia);





