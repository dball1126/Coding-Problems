/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num += ""
    while (num.length !== 1) {
        let newStr = 0
        for (let i = 0; i < num.length; i++) {
            newStr += parseInt(num[i])
        }
        num = newStr + ""
    }
    return parseInt(num)
};
console.log(addDigits(0))