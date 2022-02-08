from tree_fizz.tree_fizz_buzz import (
    Node,
    K_aryTree,
    fizz_buzz_tree,
)
import pytest


def test_empty_tree():
    tree = K_aryTree(Node())
    actual = fizz_buzz_tree(tree)
    expected = "Empty Tree"
    assert actual == expected


def test_tree_traverse():
    tree = K_aryTree(Node(1))
    tree.root.left = Node(3)
    actual = fizz_buzz_tree(tree)
    expected = [1, "Fizz"]
    assert actual == expected


@pytest.fixture
def empty_tree():
    empty_tree = K_aryTree()
    return empty_tree
