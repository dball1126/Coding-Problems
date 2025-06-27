/**
 * @param {string} s
 * @return {string[]}
 */
// Backtracking
// Time: O(!n * n)
// Space: O(n)
var generatePalindromes = function(s) {
    let n = s.length, checked = new Set(), result = []
    const isPalindrome = (str) => {
        let l = 0, r = str.length-1
        while (l < r) {
            if (str[l] !== str[r]) return false;
            l++; r--;
        }
        return true;    
    }
    const backtrack = (curr, set) => {
        if (curr.length >= n) return
        if (curr.length === n) {
            if (!checked.has(curr)) {
                checked.add(curr)
                if (isPalindrome(curr)) {
                    result.push(curr)
                }
            }
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!set.has(i)) {
                set.add(i)
                backtrack(curr + s[i], set)
                set.delete(i)
            }
        }
    }
    backtrack("", new Set())
    return result;
};
console.log(generatePalindromes("aabbhijkkjih"))