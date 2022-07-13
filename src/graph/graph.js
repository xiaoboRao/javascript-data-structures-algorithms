class Graph {
  // numberOFVertics means the number of vertex
  constructor() {
    this.vertices = []
    this.adjacencyList = new Map()
  }

  addVertex(vertex) {
    this.vertices.push(vertex)
    this.adjacencyList.set(vertex, [])
  }
  addEdge(vertex, adjacency) {
    this.adjacencyList.get(vertex).push(adjacency)
    // Since graph is undirected,
    // add an edge from adjacency to v vertex
    this.adjacencyList.get(adjacency).push(vertex)
  }

  printGraph() {
    const keys = this.adjacencyList.keys()
    for (const iterator of keys) {
      let result = ''
      const get_values = this.adjacencyList.get(iterator)
      get_values.forEach((value) => {
        result += iterator + ' -> ' + value + '   '
      })
      console.log(result + '\n');
    }
  }
  // breadth first search traversal
  bfs(startNode = this.vertices[0]) {
    // simulate the  queue
    const queue = []
    const visited = {}
    queue.push(startNode)
    visited[startNode] = true
    while(queue.length !== 0) {
      const node = queue.shift()
      console.log(node+ "  ");
      const get_values = this.adjacencyList.get(node)
      // traversal the adjacent vertext around node
      get_values.forEach((item) => {
        // if the vertext is visited, mark it true
        if(!visited[item]) {
          visited[item] = true
          queue.push(item)
        }
      })
    }
  }
  // deep first search traversal
  dfs(startNode = this.vertices[0]) {
    const visited = {}
    visited[startNode] = true
     this.dfsUtils(startNode, visited)
  }
  dfsUtils(startNode, visited) {
    console.log(startNode + '\n');
    const get_values = this.adjacencyList.get(startNode)
    get_values.forEach((item) => {
      if(!visited[item]) {
        visited[item] = true
        this.dfsUtils(item,visited)
      }
    })
  }
 }
 export default Graph
