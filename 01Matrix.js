// BFS
// Time and Space: O(n * m)...n for rows, m for columns
var updateMatrix = function(m) {
    const queue = [], rL = m.length, cL = m[0].length
    const visited = [...new Array(rL)].map(a => [...new Array(cL)])
    let level = []
    for (let r = 0; r < rL; r++) {
        for (let c = 0; c < cL; c++) {
            if (m[r][c] === 0) {
                level.push([r, c])
                visited[r][c] = 1
            }
        }
    }
    if (level.length) queue.push(level)
    while (queue.length) {
        let oldLevel = queue.shift();
        let newLevel = []
        for(let position of oldLevel) {
            let r = position[0], c = position[1]
            let up = Infinity, down = Infinity, left = Infinity, right = Infinity
  if (r === 4 && c === 9) {
      let test = ""
  }
            if ((r - 1) >= 0) { // up
                up = m[r-1][c]
                if (visited[r-1][c] !== 1) {
                    newLevel.push([r-1, c])
                    visited[r-1][c] = 1
                }
            }
            if ((r + 1) < rL) { // down
                down = m[r+1][c]
                if (visited[r+1][c] !== 1) {
                    newLevel.push([r+1, c])
                    visited[r+1][c] = 1
                }
            }
            if ((c - 1) >= 0) { // left
                left = m[r][c-1]
                if (visited[r][c-1] !== 1) {
                    newLevel.push([r, c-1])
                    visited[r][c-1] = 1
                }
            }
            if ((c + 1) < cL) { // right
                right = m[r][c+1]
                if (visited[r][c+1] !== 1) {
                    newLevel.push([r, c+1])
                    visited[r][c+1] =1
                }
            }
            if (m[r][c] === 0) continue;
    
            let val = Math.min(up, down, left, right) + 1
            m[r][c] = val
        }
        if (newLevel.length) queue.push(newLevel)
    }
    return m
};

console.log(updateMatrix([[1,1,0,0,1,0,0,1,1,0],[1,0,0,1,0,1,1,1,1,1],[1,1,1,0,0,1,1,1,1,0],[0,1,1,1,0,1,1,1,1,1],[0,0,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,0,1,1,1],[0,1,1,1,1,1,1,0,0,1],[1,1,1,1,1,0,0,1,1,1],[0,1,0,1,1,0,1,1,1,1],[1,1,1,0,1,0,1,1,1,1]]))
