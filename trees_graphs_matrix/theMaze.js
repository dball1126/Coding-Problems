// Breath-First-Search
// Time and Space: O(r * c) for rows * columns
var hasPath = function(maze, start, destination) {
    let visited = [...new Array(maze.length)].map(a => [...new Array(maze[0].length)]), queue = [start]
    visited[start[0]][start[1]] = true;
    while (queue.length) {
        let node = queue.shift();
        let [r, c] = node;
        let tR = r, tC = c
        let [x, y] = destination
        if (r === x && c === y) return true;

        while (tR > 0) { // up
            if (maze[tR-1][tC] === 1) break
            tR--
        }
        if (tR !== r && !visited[tR][tC]) queue.push([tR, tC]); visited[tR][tC]=true

        tR = r, tC = c
        while (tR < maze.length-1) { // down
            if (maze[tR+1][tC] === 1) break
            tR++
        }
        if (tR !== r && !visited[tR][tC]) queue.push([tR, tC]); visited[tR][tC]=true

        tR = r, tC = c
        while (tC > 0) { // left
            if (maze[tR][tC-1] === 1) break
            tC--
        }
        if (tC !== c && !visited[tR][tC]) queue.push([tR, tC]); visited[tR][tC]=true

        tR = r, tC = c
        while (tC < maze[0].length-1) { // right
            if (maze[tR][tC+1] === 1) break
            tC++
        }
        if (tC !== c && !visited[tR][tC]) queue.push([tR, tC]); visited[tR][tC]=true
    }   
    return false;
};
console.log(hasPath(maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4])) // = true
