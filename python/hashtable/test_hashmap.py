from hash_table import HashTable
import pytest
from hashmap import first_repeated_word


def test_hasthtable_exists():
    hashtable = HashTable()
    assert hashtable


def test_hash_consistency():
    hashtable = HashTable()
    key = "purple"
    index = hashtable.hash(key)
    actual = hashtable.hash(key)
    assert actual == index


def test_same_index():
    hashtable = HashTable()
    key_a = "abcde"
    key_b = "edabc"
    assert hashtable.hash(key_a) == hashtable.hash(key_b)


def test_different_index():
    hashtable = HashTable()
    key_a = "ababab"
    key_b = "ababac"
    assert hashtable.hash(key_a) != hashtable.hash(key_b)


def test_first_repeated_word():
    str = "Once upon a time there was a brave princess who"
    actual = first_repeated_word(str)
    assert actual == "a"


def test_first_repeated_word():
    str = "the dog is a dog is not a cat"
    actual = first_repeated_word(str)
    assert actual == "dog"
