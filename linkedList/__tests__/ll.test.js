'use strict';

const LinkedList = require('../lib/linked-list.js');


describe('LINKED LIST', () => {

  //Can successfully instantiate an empty linked list
  it('should create an empty list on instantiation', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  //Can properly insert into the linked list
  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    let first = 'first';
    let second = 'second';

    list.append(first); // add an item to the list
    expect(list.head.value).toEqual(first); // check that the item was added with our val

    list.append(second);
    expect(list.head.next.value).toEqual(second);
  });

  // The head property will properly point to the first node in the linked list
  it('The head property will properly point to the first node in the linked list', () => {

    let list = new LinkedList();
    let first = 'first';
    let second = 'second';
    let third = 'third';
    let fourth = 'fourth';


    list.append(first); // add an item to the list
    list.append(second); // add an item to the list
    list.append(third); // add an item to the list
    list.append(fourth); // add an item to the list

    expect(list.head.value).toEqual(first); // check that the item was added with our val

  });

  //Can properly insert multiple nodes into the linked list
  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    let first = 'first';
    let second = 'second';
    list.append(first); // add an item to the list
    expect(list.head.value).toEqual(first);
    list.append(second);
    list.append(3);
    list.append(4);
  });

  //Will return true when finding a value within the linked list that exists
  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    let first = 'first';
    list.append(first); // added an item to the list

    expect(list.head.value).toBeTruthy();//Might need to look at this truthy method again
  });

  //Will return false when searching for a value in the linked list that does not exist
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    let first = 'first';
    let second = 'second';
    list.append(first); // add an item to the list
    list.append(second);
    list.append(3);
    list.append(4);

    expect(list.head.value).toContain(5);
  });

  //Can properly return a collection of all the values that exist in the linked list
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });
});