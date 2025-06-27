/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let result = 0, lastNumber = 0, currNumber = 0, operator = "";
    let i = 0;

    while (i < s.length) {
        if (s[i] === " ") {
            i++; continue;
        }
        if (!isNaN(s[i])) {
            currNumber = currNumber *  10 + parseInt(s[i]);
        }

        if (isNaN(s[i])) {
            if (s[i] === "+" || s[i] === "-") {
                result += s[i] === "+" ? currNumber : -currNumber;
                operator = s[i];
                lastNumber = currNumber;
               currNumber = 0;
            } else if (s[i] === "*") {
                currNumber += lastNumber * currNumber
                lastNumber = currNumber;
                
            } else if (s[i] === "/") {
                currNumber += Math.floor(lastNumber / currNumber)
                lastNumber = currNumber;
                
            }
        }
    }

    return result + lastNumber;
};