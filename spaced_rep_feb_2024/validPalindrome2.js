/**
 * @param {string} s
 * @return {boolean}
 */



// Two-pointer
// Time: O(n)
// Space: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
// TWo-pointer 
// Time: O(n), Space: O(1)
var validPalindrome = function(s) {
    let l = 0, r = s.length-1

    const valid = (left, right) => {
        let l = left, r = right
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++; r--
        }
        return true
    }

    while (l < r) {
        if (s[l] !== s[r]) {
            return valid(l+1, r) || valid(l, r-1)
        }
        l++; r--;
    }
    return true
};
console.log(validPalindrome(s = "abcba"))// = true
