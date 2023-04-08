/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = (n).toString(2).split("")
    while (str.length < 32) str.unshift("0")
    for(let i = 0; i < Math.floor(str.length/2); i++) {
        [str[i], str[31 - (i)]] = [str[31 - (i)], str[i]]
    }
    return parseInt(str.join(""), 2)
};

console.log(reverseBits(10))