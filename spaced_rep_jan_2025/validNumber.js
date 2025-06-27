/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    
    let isE = (v) => v === 'e' || v === 'E';
    let isDot = (v) => v === '.';
    let isNum = (v) => v !== ' ' && !isNaN(v);
    let isSign = (v) => v === '-' || v === '+'; 
    let seenNum = false, seenSign = false, seenDot = false, seenE = false;

    for (let i = 0; i < s.length; i++) {
        if (isE(s[i])) {
            if (!seenNum || seenE) return false;
            seenE = true; seenNum = false; seenSign = false; seenDot = false;
        } else if (isSign(s[i])) {
            if (seenNum || seenSign) return false
            seenSign = true;
        } else if (isDot(s[i])) {
            if (seenDot || seenSign) return false;
            seenDot = true;
        } else {
            if (!isNum(s[i])) {
                return false;
            }
            seenNum  = true;
        }
    }
    return seenNum;
};
console.log(isNumber("6+1"))