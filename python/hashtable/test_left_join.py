from hash_table import HashTable
import pytest
from left_join import hashmap_left_join

def test_proof_of_life():
    assert hashmap_left_join

def test_instantiate_hashmap():
    hashmap = HashTable()
    assert hashmap

def test_empty_hashmap_returns_None():
    hashtable1 = HashTable()
    hashtable2 = HashTable()
    hashtable1.add("tomato", "soup")
    actual = hashmap_left_join(hashtable1, hashtable2)
    assert actual == [['tomato', 'soup', None]]

def test_hashmap():
    assert hashmap_left_join

def test_left_1(hashmap1, hashmap2):
    actual = hashmap_left_join(hashmap1, hashmap2)
    expected = []
    for entry in expected:
        assert entry in actual

def test_hashmap_int_join(hashmap_int, hashmap_int2):
    actual = hashmap_left_join(hashmap_int, hashmap_int2)
    expected = [['2','anger','delight'],
                ['1','enamored','averse'],
                ['3','employed','idle'],]
    assert actual == expected


@pytest.fixture

def hashmap1():
    hashmap1 = HashTable()
    hashmap1.add('fond', 'enamored')
    hashmap1.add('wrath', 'anger')
    hashmap1.add('diligent','employed')
    hashmap1.add('outfit', 'dashiki')
    hashmap1.add('singer', 'usher')

    return hashmap1

@pytest.fixture

def hashmap2():
    hashmap2 = HashTable()
    hashmap2.add('fond','averse')
    hashmap2.add('wrath', 'delight')
    hashmap2.add('diligent', 'idle')
    hashmap2.add('guide', 'follow')
    hashmap2.add('flow', 'jam')

    return hashmap2

@pytest.fixture
def hashmap_int():
    hashmap_int = HashTable()
    hashmap_int.add('1', 'enamored')
    hashmap_int.add('2', 'anger')
    hashmap_int.add('3', 'employed')

    return hashmap_int

@pytest.fixture
def hashmap_int2():
    hashmap_int2 = HashTable()
    hashmap_int2.add('1', 'averse')
    hashmap_int2.add('2', 'delight')
    hashmap_int2.add('3', 'idle')

    return hashmap_int2