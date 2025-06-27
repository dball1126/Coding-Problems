/**
 * @param {string} s
 * @return {number}
 */var calculate = function(s) {
    if (!s || s.length === 0) return 0;
    let length = s.length;
    let currentNumber = 0, lastNumber = 0, result = 0;
    let operation = '+';
    for (let i = 0; i < length; i++) {
        let currentChar = s[i];
        if (!isNaN(currentChar)) {
            currentNumber = (currentNumber * 10) + parseInt(currentChar);
        }
        if (isNaN(currentChar) && currentChar !== ' ' || i === length - 1) {
            if (operation === '+' || operation === '-') {
                result += lastNumber;
                lastNumber = (operation === '+') ? currentNumber : -currentNumber;
            } else if (operation === '*') {
                lastNumber = lastNumber * currentNumber;
            } else if (operation === '/') {
                lastNumber = Math.trunc(lastNumber / currentNumber);
            }
            operation = currentChar;
            currentNumber = 0;
        }
    }
    result += lastNumber;
    return result;
};
console.log(calculate( "14/3*2"))