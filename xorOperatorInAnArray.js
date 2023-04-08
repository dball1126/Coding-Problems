/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let sum = start;
    n--
    while (n > 0) {
        sum = sum ^ (start + 2)
        start+=2
        n--
    }
    return sum
};

console.log(xorOperation(n = 4, start = 3))