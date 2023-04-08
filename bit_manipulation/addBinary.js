/**
 * Time: O(n + m)...a string + b string
 */
var addBinary = function(a, b) {
    a = BigInt(`0b${a}`)
    b = BigInt(`0b${b}`)
    var getSum = function(a, b) {
        if (a === 0n || b === 0n) return a ^ b;
        while (b !== 0n) {
            let temp = a;
            a ^= b
            b &= temp
            if (b !== 0n) b <<=1n
        }   
        return a; 
    };
    return getSum(a, b).toString(2)
};


console.log(addBinary(a = "1000", 
b = "10"))