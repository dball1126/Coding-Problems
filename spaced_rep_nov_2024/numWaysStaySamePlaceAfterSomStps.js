/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
    const memo = [...new Array(steps+1)].map(a => [...new Array(arrLen+1)].map( a => [...new Array(steps+1)]))
    const dp = (row, col, cnt) => {
        if (cnt >= steps) {
            return row === 0 && col === 0 ? 1 : 0
        }
        if (row < 0 || col < 0 || row >= steps || col >= arrLen) return 0
        if (memo[row][col][cnt] !== undefined) return memo[row][col][cnt]
        let v1 =  dp(row, col-1, cnt+1)  % ((10**9) + 7)
        let v2 =  dp(row, col+1, cnt +1) % ((10**9) + 7)
        let v3 =   dp(row, col, cnt+1) % ((10**9) + 7)
 
        return memo[row][col][cnt] = (v1 + v2 + v3 ) % ((10**9) + 7)
    }
    return dp(0,0,0)
};
console.log(numWays( steps = 499, arrLen = 300))
