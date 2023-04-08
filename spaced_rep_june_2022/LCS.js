// // Time: O(n*m)
// // SPace: O(n + m)
// var longestCommonSubsequence = function(t1, t2) {
//     let memo = [...new Array(t1.length+1)].map(c => [...new Array(t2.length+1)].fill(-Infinity))
//     const dp = (i, j) => {
//         if (i >= t1.length || j >= t2.length) memo[i][j] = 0
//         if (memo[i][j] !== -Infinity) return memo[i][j]
//         if (t1[i] === t2[j]) {
//             memo[i][j] = Math.max(dp(i+1,j+1)+1, dp(i+1,j), dp(i,j+1))
//         } else {
//             memo[i][j] = Math.max(dp(i+1,j+1), dp(i+1,j), dp(i,j+1))
//         }
//         return memo[i][j]
//     }
//     dp(0,0)
//     return memo[0][0]
// };

// Time: O(n*m)
// SPace: O(n + m)
var longestCommonSubsequence = function(t1, t2) {
    let memo = [...new Array(t1.length+1)].map(c => [...new Array(t2.length+1)].fill(0))

    for (let i = t1.length-1; i >= 0; i--) {
        for (let j = t2.length-1; j >= 0; j--) {
            let val = 0;
            if (t1[i] === t2[j]) val = 1;
            let l = memo[i+1][j+1] + val, l2 = memo[i+1][j], l3 = memo[i][j+1]       
            memo[i][j] = Math.max(l, l2, l3, memo[i][j])
        }
    }
    return memo[0][0]
};

console.log(longestCommonSubsequence("bsbininm",
"jmjkbkjkv"))