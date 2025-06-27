var getSum = function(a, b) {
    
    while ((a & b) !== 0) {
        let tempB = a ^ b
        a = (a & b) << 1
        b = tempB
    }
    return a ^ b
};

console.log(getSum(-6,3))