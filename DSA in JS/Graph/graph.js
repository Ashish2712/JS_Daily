// A graph is a collection of nodes connected by edges. 
// Unlike trees, graphs can have cycles and may not have a designated root.

class Graph {
    constructor() {
        this.nodes = [];
        this.edges = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    addEdge(node1, node2) {
        this.edges.push([node1, node2]);
    }
}

let graph = new Graph();
let nodeA = 1;
let nodeB = 2;
graph.addNode(nodeA);
graph.addNode(nodeB);
graph.addEdge(nodeA, nodeB);


console.log(graph); // prints an object containing the graph nodes along with the edges
/* 
Graph { nodes: [ 1, 2 ], edges: [ [ 1, 2 ] ] }
*/