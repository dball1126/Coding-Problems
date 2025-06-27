/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    const isSquare = (v) => {
        if (v === 1 || v === 0) return true
        if (v < 0 ) return false;
        let v2 = Math.floor( v / 2)
        for (let i = 1; i <= v2; i++) {
            if ((i * i) === v) return true
        }
        return false;
    }
    const dp = [...new Array(n+1)]
    const dfs = (s) => {
        if (isSquare(s) && (s-s === 0)) return 1
        let v2 = Math.floor( s / 2)
        let v = s
        for (let i = 1; i <= v2; i++) {
            if (isSquare(s - i) ) {
                v = Math.min(v, 1 + dfs(s- i))
            }
        }
        return v
    }
    console.log(dfs(n))
};
console.log(numSquares(12))