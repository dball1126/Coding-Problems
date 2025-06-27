/**
 * @param {string} s
 * @return {number}
 */
// Use two variables, store a reference to the "last" expression
// Time: O(n)
// Space: O(1)
var calculate = function(s) {
    let result = 0, lastNum = 0, currNum = 0, operator = "+";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " " && !isNaN(s[i])) {
            currNum = currNum * 10 + parseInt(s[i]);
        }
        if (isNaN(s[i]) || i === s.length - 1) {

            if (operator === "+" || operator === "-") {
                result += lastNum;
                lastNum = operator === '+' ? currNum : -currNum;
            } else if (operator === "*") {
                lastNum = lastNum * currNum;
            } else if (operator === "/") {
                lastNum = Math.trunc(lastNum / currNum); // Math.floor can give issues with negative numbers
            }
            currNum = 0;
            operator = s[i];
        }
    }
    return result + lastNum;
};
console.log(calculate("14-3/2"))