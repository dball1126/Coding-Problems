var myPow = function(val, expo) {
    let isNegative = false
    if (expo < 0) {
        isNegative = true  
        expo *= -1
        val = 1/val
    }
    expo = parseInt(expo)
    let exponent = 1, result = val;
    if (expo === 0) return val;

    while (exponent < expo) {
        if (exponent * 2 <= expo) {
            result *= result
            exponent *= 2
        } else {
            exponent += 1
            result *=  val
        }
    }
    if (isNegative) {
        return result
    }
    return result;
};

console.log(myPow(2.1, 3))