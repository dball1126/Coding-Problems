/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let result = 0, lastNumber = 0, currNumber = 0, operator = "+", i = 0;
    
    while (i < s.length) {

        if (!isNaN(s[i])) {
            currNumber = currNumber * 10 + parseInt(s[i]);
        }

        if (s[i] !== " " && isNaN(s[i])) {
            if (operator === "+" || operator === "-") {
                lastNumber= operator === "+" ? lastNumber : -lastNumber;
            } else if (operator === "*") {
                lastNumber = lastNumber * currNumber;
            } else if (operator === "/") {
                lastNumber = Math.floor(lastNumber / currNumber);
            }
            result += lastNumber;
            lastNumber = currNumber;
            currNumber = 0;
            operator = s[i];
        }
        
        i++;
    }

    return result + lastNumber;
};