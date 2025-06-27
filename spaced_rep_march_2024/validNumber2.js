/**
 * @param {string} s
 * @return {boolean}
 */
/// Follow the 'Rules'
// Time: O(n)
// Space: O(1)
var isNumber = function(s) {
    const isNum = (i) => s[i] >= "0" && s[i] <= "9"
    const isSign = (i) => s[i] === "+" || s[i] === "-"
    const isE = (i) => s[i] === "E" || s[i] === "e" 
    const isDot = (i) => s[i] === '.'
    let seenSign = false, seenE = false, seenDot = false, seenNum = false;
    let n = s.length;

    for (let i = 0; i < n; i++) {

        if (isE(i)) {
            if (!seenNum || seenE) return false
            seenNum = false; seenSign = false; seenDot = false
        } else if (isDot(i)) {
            if (seenDot || seenE) return false;
        } else if (isSign(i)) {
            if ((seenSign && !seenE) || seenNum || seenDot) return false;
        } else if (!isNum(i)) {
            return false;
        }

        if (isE(i)) seenE = true;
        if (isNum(i)) seenNum = true;
        if (isSign(i)) seenSign = true;
        if (isDot(i)) seenDot = true;
    }
    return seenNum;
};
console.log(isNumber("32.e-80123")) // = true
