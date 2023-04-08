var divide = function(a, b) {
    let isNegative = false;
    if (a === 0 || b === 0) return 0;
    if (a < 0 && b > 0 || a > 0 && b < 0) isNegative = true;
    a = Math.abs(a)
    b = Math.abs(b)
    let count = 0, max = (2 ** 31) -1
    while (a >= b) {
        let tCount = 1, tempB = b, tempA = a
        while (((tempB << 1) <= tempA) && ((tempB << 1) > tempB)) {
            tempB <<= 1
            tCount <<= 1
            tempA >>= 1
            if (tempB === 0) {
                if (isNegative) return -(2 ** 31)
                return max
            }
        }
        count += tCount
        a -= tempB
    }
    if (!isNegative) {
        if (count > max) return max
        return count;
    } else {
        if (count > 2 ** 31) return - (2 ** 31)
        return -(count)
    }
};

console.log(divide(1100540749,
    -1090366779))