import pytest
from graph import Graph, Vertex, Edge
from graph_business_trip import flights

def test_instantiate_graph():
    graph = Graph()
    assert graph
    assert graph._adjacency_list == {}

def test_instantiate_vertex():
    vertex = Vertex()
    assert vertex

def test_instantiate_Edge():
    vertex = Vertex()
    edge = Edge(vertex)
    assert edge

def test_add_vertex():
  graph = Graph()
  graph.add_node(1)
  graph.add_node(5)
  graph.add_node(9)
  graph.add_node(6)
  graph.add_node(8)

  vertex1 = Vertex()
  vertex2 = Vertex()
  vertex3 = Vertex()

  edge = Edge(vertex1, vertex2)
  edge1 = Edge(vertex1, vertex3)
  edge2 = Edge(vertex2, vertex1)
  
  print(edge2)
