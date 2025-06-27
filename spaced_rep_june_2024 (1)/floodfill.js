/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
// Breadth-First-Search
// Time And Space: O(r * c)...for rows * columns
var floodFill = function(image, sr, sc, color) {
    
    let dirs = [[-1,0], [1,0], [0,-1], [0, 1]], visited = image.map(a => a.map(v => false))
    let n = image.length, m = image[0].length
    const bfs = (r, c, tgt) => {
        if (r < 0 || c < 0 || r >= n || c >= m || visited[r][c]) return
        visited[r][c] = true
        if (image[r][c] === tgt) {
            image[r][c] = color
            for (let [x, y] of dirs) {
                bfs(r+x, c+y, tgt)
            }
        }
    }
    bfs(sr, sc, image[sr][sc])
    return image;
};
console.log(floodFill(image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0))