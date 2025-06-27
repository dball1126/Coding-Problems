/**
 * @param {string} s
 * @return {string}
 */

// Palindromes. Expand from Center
// Time: O(n^2)
// Space: O(1)
var longestPalindrome = function(s) {
    let n = s.length, minL = 0, maxL = 0
    for (let i = 0; i < n; i++) {
        let j = i-1, k = i+1 // handle one char at start
        while (j >= 0 && k < n && s[j] === s[k]) { 
            
            if (k - j > maxL - minL) {
                minL = j; maxL = k
            }
            j-=1; k++

        }
        j = i; k = i+1 // handle two chars equal at start
        while (j >= 0 && k < n && s[j] === s[k]) { 
            if (k - j > maxL - minL) {
                minL = j; maxL = k
            }
            j-=1; k++
        }
    }
    return  s.substring(minL, maxL+1)
};

console.log(longestPalindrome("aaaa"))