/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = BigInt(`0b${a}`), b = BigInt(`0b${b}`)
    return (a + b).toString(2)

    
    while (a & b) {
        let tmp = a ^ b, tmp2 = a & b
        b = (tmp2 << 1) 
        a = tmp
    }
    return (a | b).toString(2)
};
console.log(addBinary(a = "1010", b = "1011"))