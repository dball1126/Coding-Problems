var divide = function(a, b) {
    if (!a || !b) return 0;
    while (b !== 0) {
        if (b & 1 === 1) {
            a >>= 1
        }
        b >>= 1
    }
    return a;
};

console.log(divide(8, 4))