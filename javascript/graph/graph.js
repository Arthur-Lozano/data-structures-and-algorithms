

class Graph {
  constructor() {
    this.adjacencyList = {};

  }

  addVertex(vertex) {
    // to avoid overwriting the existing vertex, we need if statement
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex, node) {
    if (this.AdjList.has(vertex)) {
      if (this.AdjList.has(node)) {
        let arr = this.AdjList.get(vertex);
        if (!arr.includes(node)) {
          arr.push(node);
        }
      } else {
        throw `non-existing vertex ->'${node}'`;
      }
    } else {
      throw `Add '${vertex}' first`;
    }
  }

  removeEdge(ver1, ver2) {
    // two way connection, delete from both arrays
    this.adjacencyList[ver1] = this.adjacencyList[ver1].filter(
      v => v !== ver2
    );
    this.adjacencyList[ver2] = this.adjacencyList[ver2].filter(
      v => v !== ver1
    );
  }

  removeVertex(vertex) {
    // first find all the conncetion, and remove all edges from both parties, 
    // and then delete the vertex from the adjacency list
    let edges = this.adjacencyList[vertex];

    for (let edge of edges) {
      this.removeEdge(vertex, edge);
    }
    delete this.adjacencyList[vertex];
  }
}

module.exports = Graph;
