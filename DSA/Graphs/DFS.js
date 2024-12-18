function dfs(graph, start, visited = new Set()) {
    if (!visited.has(start)) {
        console.log(start);
        visited.add(start);
        for (let neighbor of graph[start]) {
            dfs(graph, neighbor, visited);
        }
    }
}

// Example Adjacency List for DFS
const graphDFS = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
};
dfs(graphDFS, "A");
