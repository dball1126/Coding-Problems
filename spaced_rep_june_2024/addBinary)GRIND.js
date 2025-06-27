/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let val1 = BigInt(`0b${a}`), val2 = BigInt(`0b${b}`)
    return (val1 + val2).toString(2)
};

console.log(addBinary("11", "01"))