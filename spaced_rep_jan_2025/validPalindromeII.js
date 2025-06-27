/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let i = 0, j = s.length-1

    const validate = (k, p) => {
        while (k < p) {
            if (s[k] !== s[p]) return false;
            k++; p--;
        }
        return true;
    }

    while (i < j) {
        while (i < j && s[i] === s[j]) {
            i++; j--;
        }
        return validate(i+1, j) || validate(i, j-1)
    }
    return true;
};
console.log(validPalindrome( s = "aba"))