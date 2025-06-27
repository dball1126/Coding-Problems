/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
    let visited = new Set(), n = grid.length, m = grid[0].length
    let cellCount = [...new Array(n+1)].map(a => [...new Array(m+1)].map(a => [...new Array(2)].fill(0)))
    let queue = []
    const dirs = [[-1,0],[1,0],[0,1],[0,-1]]
    let friends = 0
    let min = Infinity
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                queue.push([[i, j], 0, i+":"+j])
                friends++
            }
        }
    }

    while (queue.length) {
        let [arr, val, key] = queue.shift()
        let [r, c] = arr
        let k = key + ":" + r + ":" + c
        visited.add(k)
        cellCount[r][c][0]++
        cellCount[r][c][1]+= val
        if (cellCount[r][c][0] === friends) {
            min = Math.min(min, cellCount[r][c][1])
        }
    
        for (let [x, y] of dirs) {
            let vx = r + x, vy = c + y
            if (vx >= 0 && vy >= 0 && vx < n && vy < m) {
                let key2 = key + ":"  + vx + ":" + vy
                if (!visited.has(key2)) {
                    visited.add(key2)
                    queue.push([[vx,vy],val+1, key])                   
                }
            }
        }
    }
    return min
 };
 console.log(minTotalDistance([[0,1,0,0,0,0,0,0,0],[0,1,0,0,0,1,0,0,0],[1,1,1,0,1,0,1,0,0],[0,0,1,0,0,0,0,1,0],[1,0,1,1,0,1,0,0,0]]))