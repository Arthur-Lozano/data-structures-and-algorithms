from linked_list.linked_list import Node, LinkedList
import pytest


def test_node_instance():
    node = Node(1, None)
    assert node.next == None
    assert node.value == 1


def test_node_instance_fail():
    node = Node(1, None)
    assert node.next != node
    assert node.value != 2


def test_linked_list():
    node = Node(1, None)
    ll = LinkedList(node)
    assert ll.head == node


def test_linked_list_empty():
    ll = LinkedList()
    assert ll.head == None


def test_insert_to_empty_linked_list():
    # ll.head = apple
    ll = LinkedList()
    ll.insert("apple")
    assert ll.head.value == "apple"


def test_insert_to_linked_list():

    ll = LinkedList()
    # head is none
    node1 = Node("apple")
    # ll.head is none
    ll.head == node1
    # ll.head is apple
    node2 = Node("pear")
    # apple.next is none
    node1.next = node2
    # apple.next is pear
    # [apple] -> [pear] -> None
    ll.insert("bananna")
    # [bananna] -> [apple] -> [pear]
    assert ll.head.value == "bananna"


def test_multiple_insert_to_linked_list():
    linked_list = LinkedList()
    linked_list.insert("50")
    linked_list.insert("10")
    linked_list.insert("10")
    linked_list.insert("30")
    linked_list.insert("10")
    actual = linked_list.head.next.value
    expected = "30"
    assert actual == expected


def test_includes():
    linked_list = LinkedList(Node(11, Node(12, Node(30, Node(40, Node(50))))))
    actual = linked_list.includes(30)
    expected = True
    assert actual == expected


def test_str():
    linked_list = LinkedList(Node("10", Node("20", Node("30", Node("40", Node("50"))))))
    actual = linked_list.to_string()
    expected = "{'10'} -> {'20'} -> {'30'} -> {'40'} -> {'50'} -> None"
    assert actual == expected


# CC6


def test_append():
    link_list = LinkedList(Node("h", Node("o", Node("o"))))
    link_list.append("b")
    actual = link_list.to_string()
    expected = "{'h'} -> {'o'} -> {'o'} -> {'b'} -> None"
    assert actual == expected


def test_insert_before():
    link_list = LinkedList(Node("1", Node("3", Node("4"))))
    link_list.insert_before("3", "2")
    actual = link_list.__str__()
    expected = "{'1'} -> {'2'} -> {'3'} -> {'4'} -> NULL"


def test_insert_after():
    link_list = LinkedList(Node("1", Node("2", Node("4"))))
    link_list.insert_after("2", "3")
    actual = link_list.__str__()
    expected = "{'1'} -> {'2'} -> {'3'} -> {'4'} -> NULL"


# Code challenge 7 to the kth


def test_kth_from_end():
    linked_list = LinkedList(Node("1", (Node("2", Node("3", Node("4"))))))
    actual = linked_list.kth_from_end(1)
    expected = "3"
    assert actual == expected


def test_kth_negative():
    linked_list = LinkedList(Node("1", (Node("2", Node("3", Node("4"))))))
    actual = linked_list.kth_from_end(-6)
    expected = "please choose a positive number"
    assert actual == expected


def test_kth_too_large():
    linked_list = LinkedList(Node("1", (Node("2", Node("3", Node("4"))))))
    actual = linked_list.kth_from_end(6)
    expected = "That brings us out of the linked list"
    assert actual == expected


def test_kth_same():
    link_list = LinkedList(Node(1))
    actual = link_list.kth_from_end(1)
    expected = "That brings us out of the linked list"
    assert actual == expected
