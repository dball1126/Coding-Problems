// Breadth-First-Search
// Time and Space: O(n * m) ... rows * columns
var floodFill = function(image, sr, sc, color) {
    const dirs = [[-1,0], [1, 0], [0,-1], [0, 1]]
    let m = image.length, n = image[0].length
    let queue = [[sr, sc]]
    let visited = [...new Array(m)].map(a => [...new Array(n)])
    
    while (queue.length) {
        let [r, c] = queue.shift();
        let val = image[r][c];
        visited[r][c] = true
        dirs.forEach(d => {
            let tR = r + d[0], tC = c + d[1];
            if (tR >= 0 && tC >= 0 && tR < m && tC < n) {
                if (!visited[tR][tC] && image[tR][tC] === val) {
                    queue.push([tR, tC])
                }
            }
        })
        image[r][c] = color;
    }
    return image;
};
console.log(floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2))