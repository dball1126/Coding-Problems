/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let lastNumber = 0, currNumber = 0, result = 0, operator = "+";

    for (let i = 0; i < s.length; i++) {
        
        if (s[i] !== " " && !isNaN(s[i])) {
            currNumber = currNumber * 10 + parseInt(s[i]);
        }

        if (isNaN(s[i]) || i === s.length-1) {
            if (operator === "+" || operator === "-") {
                result += lastNumber;
                lastNumber = operator === "+" ? currNumber : -currNumber;
            } else if (operator === "*") {
                lastNumber *= currNumber
            } else if (operator === "/") {
                lastNumber = Math.trunc(lastNumber / currNumber);
            }
            currNumber = 0;
            operator = s[i]
        }
    }

    return result + lastNumber;
};
console.log(calculate("0-2147483647"))