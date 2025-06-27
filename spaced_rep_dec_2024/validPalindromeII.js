/**
 * @param {string} s
 * @return {boolean}
 */
// Palindromes
// Time: O(n)...can be O(n) + O(n) which ends up being O(n)
// Space: O(1)
var validPalindrome = function(s) {
    if (s.length <= 1) return true
    let checkIfPalindromeIsValid = (i, j) => {
        if (i > j) return false
        if (i === j) return true
        while (i < j) {
            if (s[i] !== s[j]) return false
            i++; j--;
        }
        return true
    }

    let i = 0, j = s.length-1

    while (i < j) {
        if (s[i] !== s[j]) {
            return checkIfPalindromeIsValid(i+1, j) || checkIfPalindromeIsValid(i, j-1)
        } else {
            i++; j--
        }
    }
    return true;
};
console.log(validPalindrome("abbczbba"))