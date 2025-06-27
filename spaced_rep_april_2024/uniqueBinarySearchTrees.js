/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    
    // let count = 0
    const catalan = (l, r) => {
        if ( l < 0 || l > r) return 0
        if (l === r) return 1
        let count = 0
        for (let i = l; i <= r; i++) {
            count += catalan(l, i-1)
            count += catalan(i+1, r)
        }
        return count;
    }
  
    return catalan(0, n-1)
    return count
};
console.log(numTrees(3))