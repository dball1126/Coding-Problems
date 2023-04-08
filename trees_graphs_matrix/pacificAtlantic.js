// Breadth-First-Search, matrix traversal
// Time and Space: O(m * n) for rows * cols
var pacificAtlantic = function(heights) {
    let m = heights.length, n = heights[0].length, pacific = [], atlantic = []
    let result = [], dir = [[-1,0],[0,-1],[1,0],[0,1]]
    let pacificVisited = [...new Array(m)].map(a => [...new Array(n)].fill(false))
    let atlanticVisited = [...new Array(m)].map(a => [...new Array(n)].fill(false))
    
    for (let row = 0; row < m; row++) { // default rows
        if (!pacificVisited[row][0]) {
            pacific.push([row, 0]); pacificVisited[row][0] = true;
        }
        if (!atlanticVisited[row][n-1]) {
            atlantic.push([row, n-1]); atlanticVisited[row][n-1] = true
        }
    }
    for (let col = 0; col < n; col++) { // default cols
        if (!pacificVisited[0][col]) {
            pacific.push([0, col]); pacificVisited[0][col] = true;
        }
        if (!atlanticVisited[m-1][col]) {
            atlantic.push([m-1, col]); atlanticVisited[m-1][col] = true
        }
    }
    const bfs = (arr, visited) => {
        while (arr.length) {
            let [x, y] = arr.shift();
            dir.forEach(([x1, y1]) => {
                let vx = x + x1, vy = y + y1 
                if (vx >= 0 && vy >= 0 && vx < m && vy < n) {
                    if (!visited[vx][vy] && heights[vx][vy] >= heights[x][y]) {
                        arr.push([vx, vy])
                        visited[vx][vy] = true
                    }
                } 
            })
        }
    }
    bfs(pacific, pacificVisited)
    bfs(atlantic, atlanticVisited)
    for (let i = 0; i < m; i++) { // find result
        for (let j = 0; j < n; j++) {
            if (pacificVisited[i][j] && atlanticVisited[i][j]) {
                result.push([i, j])
            }
        }
    }
    return result
};

console.log(pacificAtlantic(heights = [[1]]
    ))

    // [[0,29],[1,28],[2,28],[12,0],[12,1],[13,0]]


    // [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[1,0],
    // [1,2],[1,3],[1,5],[2,0],[2,1],[2,2],[2,3],[2,4],[2,5]]