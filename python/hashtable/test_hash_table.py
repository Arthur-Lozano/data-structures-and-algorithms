import pytest
from hash_table import HashTable


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


def test_add():
    hashtable = HashTable()
    index = hashtable.hash("John")
    assert hashtable.buckets[index] is None
    hashtable.add("John", "Doe")
    bucket = hashtable.buckets[index]
    assert bucket


def test_get():
    hashtable = HashTable()
    hashtable.add("tomato", "soup")
    find = hashtable.get("tomato")
    assert find == "soup"


def test_contains_true():
    hashtable = HashTable()
    hashtable.add("red", 1)
    hashtable.add("blue", 2)
    assert hashtable.contains("blue") == True


def test_contains_false():
    hashtable = HashTable()
    hashtable.add("red", 1)
    hashtable.add("blue", 2)
    assert hashtable.contains("green") == False
