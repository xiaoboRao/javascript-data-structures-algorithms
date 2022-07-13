import Graph from "./graph"
var graph = new Graph();
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices

vertices.forEach((vertex) => {
  graph.addVertex(vertex);
})

// adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');

// graph.printGraph()
graph.bfs()
console.log('--------------');
graph.dfs()



