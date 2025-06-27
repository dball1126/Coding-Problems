/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let low = 0, high = s.length-1;
    const isNumOrChar = (v) => {
        return ((v >= "0" && v <= "9") || (v >= "a" && v <= "z"))
    }

    while (low < high) {
        let leftVal = s[low].toLowerCase(), rightVal = s[high].toLowerCase()
        if (!isNumOrChar(leftVal)) {
            low++;
        } else if (!isNumOrChar(rightVal)) {
            high--;
        } else if (leftVal !== rightVal) {
            return false;
        } else {
            low++; high--;
        }
    }

    return true;
};
console.log(isPalindrome(s = "A man, a plan, a canal: Panama"))