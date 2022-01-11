from stack_queue.stack_queue import Stack, Queue, Node, IsEmptyError
import pytest


def test_push_to_stack():
    stack = Stack()
    stack.push(1)
    actual = stack.top.value
    expected = 1
    assert actual == expected


def test_push_mult_values():
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    actual = stack.top.value
    expected = 3
    assert actual == expected


def test_pop_from_stack():
    stack = Stack()
    stack.push(1)
    stack.push(2)
    actual = stack.pop()
    expected = 2
    assert actual == expected


def test_pop_all_from_stack():
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.pop()
    stack.pop()
    stack.pop()
    actual = stack.is_empty()
    expected = True
    assert actual == expected


def test_peek_next_item_in_stack():
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    actual = stack.peek()
    expected = 3
    assert actual == expected


def test_empty_stack_raises_exception():
    stack = Stack()
    with pytest.raises(IsEmptyError) as e:
        stack.pop()
    assert str(e.value) == "The stack is empty, therefore cannot pop."


# Queue
def test_queue_to_queue():
    q = Queue()
    q.enqueue(1)
    assert q.front.value == 1


def test_mult_queue_to_queue():
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    assert q.front.value == 1
    assert q.rear.value == 3


def test_deque_out_of_queue():
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    actual = q.dequeue()
    expected = 1
    assert actual == expected


def test_empty_queue_after_mult_dequeue():
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    with pytest.raises(IsEmptyError) as e:
        while q.peek():
            q.dequeue()
    assert str(e.value) == "The queue is empty, therefore cannot retrieve."


def test_instantiate_empty_queue():
    q = Queue()
    assert q.front == None
    assert q.rear == None


def test_dequeue_on_empty_queue_raise_expection():
    q = Queue()
    with pytest.raises(IsEmptyError) as e:
        q.dequeue()
    assert str(e.value) == "The queue is empty, therefore cannot dequeue"


# from linked_list.linked_list import Node, LinkedList
# import pytest


# def test_node_instance():
#     node = Node(1, None)
#     assert node.next == None
#     assert node.value == 1

# Can successfully push onto a stack
# Can successfully push multiple values onto a stack
# Can successfully pop off the stack
# Can successfully empty a stack after multiple pops
# Can successfully peek the next item on the stack
# Can successfully instantiate an empty stack
# Calling pop or peek on empty stack raises exception
# Can successfully enqueue into a queue
# Can successfully enqueue multiple values into a queue
# Can successfully dequeue out of a queue the expected value
# Can successfully peek into a queue, seeing the expected value
# Can successfully empty a queue after multiple dequeues
# Can successfully instantiate an empty queue
# Calling dequeue or peek on empty queue raises exception
