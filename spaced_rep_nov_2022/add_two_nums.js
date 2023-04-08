var getSum = function(a, b) {
    while ( a & b) {
        let temp = b
        b ^= a
        a = (a & temp) << 1
    }
    return a ^ b
};
console.log(getSum(4, 4))