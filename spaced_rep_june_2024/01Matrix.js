/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// Breadth-First-Search
// Time and Space: O(n * m)...for rows and cols
var updateMatrix = function(mat) {
    
    let n = mat.length, m = mat[0].length
    const dirs = [[-1,0], [1,0],[0, -1],[0,1]]
    const queue = []
    const visited = [...new Array(n)].map(a => [...new Array(m)].fill(false))
    for (let r = 0; r < n; r++) { // enqueue Zeros
        for (let c = 0; c < m; c++) {
            if (mat[r][c] === 0) {
                queue.push([r, c, 0])
                visited[r][c] = true
            }
        }
    }

    while (queue.length) {
        let [r, c, v] = queue.shift()
        mat[r][c] = v

        for (let [x, y] of dirs) {
            let rx = r + x, cy = c + y
            if (rx >= 0 && cy >= 0 && rx < n && cy < m && !visited[rx][cy]) {
                visited[rx][cy] = true;
                queue.push([rx, cy, v + 1])
            }
        }
    }
    return mat;
};
console.log(updateMatrix([[0,0,0],[0,1,0],[1,1,1]])) 
// = [ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 1, 2, 1 ] ]