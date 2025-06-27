/**
 * @param {string} s
 * @return {number}
 */
// Count Distinct Ways DP Pattern
// Bottom-Up Dynamic Programming
// Optimal Solution
// Time: O(n)
// Space: O(1)
var numDecodings = function(s) {
    let n = s.length, prev1 = 0, prev2 = 0

    for (let i = n-1; i >= 0; i--) {
        let newPrev = 0
        if (s[i] === '0') {
            prev2 = prev1;
            prev1 = 0
        } else {
            if (n === i+1) {
                prev1 = 1;
            } else {
                let v2 = s[i] + s[i+1]
                if (v2 <= "26") {
                    if (i+2 === n) {
                        prev2 = 1
                    }
                    newPrev += prev2
                }
                newPrev += prev1
                prev2 = prev1;
                prev1 = newPrev
            }
        }
    }
    return prev1;
};
console.log(numDecodings("226")) // = 3


