/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    
    let n = dominoes.length
    let memo = [...new Array(n+1)]

    const dp = (idx, alt) => {
        if (idx >= n) return ""
        if (memo[idx]) return memo[idx]

        let nxVal = ""
        if (dominoes[idx] !== ".") nxVal = dominoes[idx]

        let nx = dp(idx, nxVal)
        let prev = dominoes[idx-1] || ""

        // if (alt === "." && ((nx[0] || "") === "L") && ((prev === "R"))) {
        //     let s = ""
        // } else if (

        // )
        
    }
    return dp(0)
};