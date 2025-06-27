var plusOne = function(digits) {
    let len = digits.length-1, carry = 1, result = []

    for (let i = len; i >= 0; i--) {
        let num = digits[i] + carry
        carry = Math.floor(num / 10)
        num = num % 10
        result.unshift(num)
    }
    if (carry > 0) result.unshift(carry)
    return result
};