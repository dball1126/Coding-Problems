/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {

    const memo = [...new Array(n+1)].map(a => [...new Array(k+1)])

    const dp = (n, k) => {
        if (n === 0 ) return 1
        // if (n === 1 && k === 1) return 1;
        if (memo[n][k] !== undefined) return memo[n][k]
        let min = 0

        min += dp(n-1, k)

        if (k-1 >= 0) {
            min += dp(n-1, k-1)
        }

        return memo[n][k] = min;
    }
    return dp(n, k)
};
console.log(numWays( n = 3, k = 2))




// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number}
//  */
// var numWays = function(n, k) {

//     const memo = [...new Array(n+1)].map(a =>
//                  [...new Array(k+1)].map(a =>
//                  [...new Array(4)]))

//     const dp = (i, j, m) => {
//         if (i >= n) return 1;
//         if (memo[i][j][m] !== undefined) return memo[i][j][m];
//         let ways = 0;
//         for (let c = 0; c < k; c++) {
//             if (c === j && m >= 2) continue;
//             let diff = n - i - 2 <= 0
//             if (c === j) {
//                 console.log("I:" + i + " J:" + j + " M:" + m + " WAYS:"+ways + "DIFF:" +diff)

//                 if (diff) {
//                     ways += 1
//                 } else {
//                     ways += (dp(i+1, c, m+1))
//                 }
//             } else {
//                 ways += (dp(i+1, c, 1))

//             }
//         }
//         // return ways
//         console.log("I:" + i + " J:" + j + " M:" + m + " WAYS:"+ways)
//         return memo[i][j][m] = ways;
//     }
//     console.log
//     const result = dp(0,0,0)
//     return result;
// };