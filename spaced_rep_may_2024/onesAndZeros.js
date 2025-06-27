/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(l * n * m)...for length of input and m and n
// var findMaxForm = function(strs, m, n) {
//     let len = strs.length
//     let memo = [...new Array(len+1)].map(a => 
//         [...new Array(m+1)].map(a =>
//         [...new Array(n+1)]))
//     let ones = [...new Array(len+1)].fill(0)
//     let zeros = [...new Array(len+1)].fill(0)
//     for (let i = 0; i < len; i++) {
//         let str = strs[i]
//         for (let j = 0; j < str.length; j++ ) {
//             if (str[j] === "1") {
//                 ones[i]++
//             } else {
//                 zeros[i]++
//             }
//         }
//     }

//     let dp = (idx, o, z) => {
//         if (idx >= len || z === m && n === o) return 0
//         if (memo[idx][z][o] !== undefined) return memo[idx][z][o]
//         let next = dp(idx+1, o, z)
//         let v = 0
//         let one = ones[idx], zero = zeros[idx]
//         if (o + one <= n && z + zero <= m) {
//             v = 1 + dp(idx+1, o+one, z+zero)
//         }
//         return memo[idx][z][o] = Math.max(v, next)
//     }
//     return dp(0,0,0)
// };


// Bottom-Up Dynamic Programming
// Time and Space: O(l * n * m)...for length of input and m and n
var findMaxForm = function(strs, m, n) {
    let len = strs.length
    let memo = [...new Array(len+1)].map(a => 
        [...new Array(m+1)].map(a =>
        [...new Array(n+1)]))
    let ones = [...new Array(len+1)].fill(0)
    let zeros = [...new Array(len+1)].fill(0)
    for (let i = 0; i < len; i++) {
        let str = strs[i]
        for (let j = 0; j < str.length; j++ ) {
            if (str[j] === "1") {
                ones[i]++
            } else {
                zeros[i]++
            }
        }
    }

    for (let i = len-1; i >= 0; i--) {
         let one = ones[i], zero = zeros[i]

         for (let o = one; o >= one; one--) {
            for (let z = zero; z >= zero; z--) {

                let v = Math.max(memo[i+1][o][z], 1 + memo[i][o][z])
                // memo[i][o][z] =
            }
         }

    }

        // let one = ones[idx], zero = zeros[idx]
        // if (o + one <= n && z + zero <= m) {
            // v = 1 + dp(idx+1, o+one, z+zero)
        // }
        return memo[idx][z][o] = Math.max(v, next)

};


// var findMaxForm = function(strs, m, n) {
//     // convert strs to m & n counts per string
//     strs = strs.map((str) => {
//         const counts = [0, 0];
        
//         for (let i = 0; i < str.length; i++) {
//             const character = str[i];
            
//             counts[character] += 1;
//         }
        
//         return counts;
//     })
    
//     // setup dp matrix (m+1 x n+1)
//     const dp = [];
    
//     for (let i = 0; i <= m; i++) {
//         dp.push([]);
        
//         for (let j = 0; j <= n; j++) {
//             dp[i].push(0);
//         }
//     }
    
// 	// using example: strs = ["10","0001","111001","1","0"], m = 5, n = 3
//     // iterate through dp: strs.length x m x n
//     // this loops over m count and n count of each string
//     for (let i = 0; i < strs.length; i++) {
//         const [mCount, nCount] = strs[i];
        
//         // each time we iterate the above, we find the max "take" from the bottom right corner of matrix
//         // when we move on to the next string (m & n counts), we update based on previous iteration's values
//         for (let row = m; row >= mCount; row--) {
//             for (let column = n; column >= nCount; column--) {
//                 // max "take" is its current value or current dp m & n counts decrementing the current string's m & n count
//                 /*  Example: 
//                         row represents m, and column represents n
//                         Iteration right after processing max take of index 0's '10' string
                        
//                         [ 0, 0, 0, 0 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ]

//                         During iteration of index 1's string '0001' has 3 zeros(m's) and 1 ones(n's)
//                         From X (row 5, column 3, value 1), we decrement 3 m's and 1 n's; which ends up at Y (row 2, column 2, value 1)

//                         [ 0, 0, 0, 0 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, Y, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, X ]
                        
//                         Since we update its value based on max of (current value X = 1) or (Y position's value + 1 = 2)
//                         We update X to 2

//                         [ 0, 0, 0, 0 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 1 ],
//                         [ 0, 1, 1, 2 ]
//                 */
//                 dp[row][column] = Math.max(dp[row][column], dp[row - mCount][column - nCount] + 1);
//             }
//         }
//     }
    
//     return dp[m][n];
// };

console.log(findMaxForm(strs = ["10","0001","111001","1","0"], m = 5, n = 3))// = 4