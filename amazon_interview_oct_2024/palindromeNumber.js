/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x += ""
    let low = 0, high = x.length-1
    while (low < high) {
        if (x[low] !== x[high]) return false;
        low++; high--
    }
    return true;
};