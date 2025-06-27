/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let newNum = 0, num = x;
    while (num !== 0) {
        let v = num % 10;
        num = Math.floor(num / 10);
        newNum = (newNum * 10) + v;
    }
    return newNum === x;
};
console.log(isPalindrome(212))