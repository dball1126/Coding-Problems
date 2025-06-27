/**
 * @param {string} s
 * @return {string[]}
 */
// Backtracking
// Time: O(n ^ 2) 
// Space:
var restoreIpAddresses = function(s) {
    let result = []
    const backtrack = (idx, c, curr) => {
        if (curr.length-2 >= 0 && !isNaN(curr[curr.length-1]) && curr[curr.length-2] === 0) return
        if (idx >= s.length || c >= 4) {
            if ( idx >= s.length && c >= 4) {
                result.push(curr.slice(0, curr.length-1))
            } else {
                return
            }
        }

        for (let i = idx; i < s.length; i++) {
            backtrack(i+1, c, curr + s[i])
            backtrack(i+1, c + 1, curr + s[i] + ".")
        }

    }
    backtrack(0, 0, "")

    return result;
};
console.log(restoreIpAddresses("0000"))