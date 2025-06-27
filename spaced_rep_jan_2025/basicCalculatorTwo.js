/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    
    let lastNum = 0, currNum = 0, result = 0, opt = '+', len = s.length

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && !isNaN(s[i])) {
            currNum = (10 * currNum) + parseInt(s[i]);
        }

        if (i === len-1 || (isNaN(s[i]) && s[i] !== ' ')) {

            if (opt === "+" || opt === "-") {
                result += lastNum;
                lastNum = (opt === '+' ? currNum : -currNum);
            } else if (opt === "*") {
                lastNum *= currNum;
            } else if (opt === "/") {
                lastNum = Math.trunc(lastNum / currNum);
            }
            currNum = 0;
            opt = s[i]
        }

    }
    return result + lastNum
};
console.log(calculate(" 3+5 / 2 "))