/**
 * Time: O(n * m) for each string
 * Space: O(n * m) for dp array
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(t1, t2) {
    if (!t1 || !t2) return 0;
    let max = Math.max(t1.length, t2.length)

    let arr = [...new Array(max+1)].map(a => new Array(max+1).fill(undefined))

    const dp = (i, j) => {
    if (i >= t1.length || j >= t2.length) return 0
    if (arr[i][j] !== undefined) return arr[i][j]

    if (t1[i] === t2[j]) {
        arr[i][j] = Math.max(1 + Math.max(dp(i+1,j+1)), dp(i+1, j), dp(i, j+1))
    } else {
        arr[i][j] =  Math.max(dp(i+1, j), dp(i, j+1))
    }
        return arr[i][j]
    }
    return dp(0,0)
};