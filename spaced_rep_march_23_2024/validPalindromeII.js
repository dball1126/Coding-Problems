/**
 * @param {string} s
 * @return {boolean}
 */
// String
// Time: O(n)
// Space: O(1)
var validPalindrome = function(s) {
    let l = 0, r = s.length-1
    
    const checkPalindrome = (i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++; j--;
        }
        return true;
    }

    while (l < r) {
        if (s[l] === s[r]) {
            l++, r--;
        } else {
            return checkPalindrome(l+1, r) || checkPalindrome(l, r-1)
        }
    }
    return true;
};
console.log(validPalindrome(s = "abc"))