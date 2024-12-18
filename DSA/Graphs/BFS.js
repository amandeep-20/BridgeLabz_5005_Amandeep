function bfs(graph, start) {
    const queue = [start];
    const visited = new Set(queue);

    while (queue.length) {
        const node = queue.shift();
        console.log(node);

        for (let neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}

// Example Adjacency List for BFS
const graphBFS = {
    A: ["B", "C"],
    B: ["A", "D", "E"],
    C: ["A", "F"],
    D: ["B"],
    E: ["B", "F"],
    F: ["C", "E"],
};
bfs(graphBFS, "A");
