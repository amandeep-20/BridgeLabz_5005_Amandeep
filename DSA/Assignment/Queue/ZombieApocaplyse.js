function minTimeToInfect(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let humans = 0;
    let time = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c, 0]);
            if (grid[r][c] === 1) humans++;
        }
    }

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    while (queue.length) {
        const [r, c, t] = queue.shift();
        time = t;
        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                grid[nr][nc] = 2;
                humans--;
                queue.push([nr, nc, t + 1]);
            }
        }
    }

    return humans === 0 ? time : -1;
}

console.log(minTimeToInfect([[0, 1, 2], [0, 1, 0], [1, 0, 0]]));
