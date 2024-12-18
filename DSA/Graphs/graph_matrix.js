class GraphMatrix {
    constructor(size) {
        this.size = size;
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    // Add an edge
    addEdge(u, v) {
        this.matrix[u][v] = 1;
        this.matrix[v][u] = 1; // Remove for directed graphs
    }

    // Print the matrix
    printMatrix() {
        console.log(this.matrix);
    }
}

// Example Usage
const graph = new GraphMatrix(3); // Graph with 3 nodes
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.printMatrix();
