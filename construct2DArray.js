// Time: O(n) for orignal array length
// Space: O(1) not counting output array
var construct2DArray = function(original, m, n) {
    let array = [...new Array(m)].map(a => [...new Array(n)])
    let idx = 0;
    if (m * n !== original.length) return []
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            array[r][c] = original[idx]
            idx++
        }
    }    
    return array
};

console.log(construct2DArray(original = [1,2,3], m = 1, n = 3))