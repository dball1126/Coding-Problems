/**
 * @param {string} s
 * @return {boolean}
 */
// Time: O(n)
// Space: O(1)
var validPalindrome = function(s) {
    let n = s.length
    let deleted = false
    
    const isPalindrome = (l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) {
                if (deleted) return false

                deleted = true;
                return isPalindrome(l+1, r) || isPalindrome(l, r-1)
            } else {
                l++; r--
            }
        }
        return true;
    }
    return isPalindrome(0, n-1)
};