/**
 * @param {string} s
 * @return {number}
 */
// Count Distinct Ways DP Pattern
// Bottom-Up Dynamic Programming
// Time: O(n)
// Space: O(1)
var numDecodings = function(s) {
    let n = s.length, prev1 = 0, prev2 = 0
    for (let i = n-1; i >= 0; i--) {
        if (s[i] === '0') {
            prev2 = prev1;
            prev1 = 0
            continue
        }
        if (i+1 === n) prev1 = 1;
        let v1 = prev1, v2 = 0
        if (i+2 <= n) {
            if (s[i] + s[i+1] <= "26") {
                if (i+2 === n) prev2 = 1
                v2 = prev2
            }
        }
        let newVal = v1 + v2
        prev2 = prev1
        prev1 = newVal
    }
    return prev1
};
console.log(numDecodings("226")) // = 3
// (2, 26) & (2, 2, 6) & (22, 6)

