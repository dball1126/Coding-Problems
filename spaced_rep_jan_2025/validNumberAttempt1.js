/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let seenNum = false, seenSign = false, seenDot = false, seenE = false;
    let len = s.length;

    for (let i = 0; i < len; i++) {
        const v = s[i];

        if (v === ' ') {
            continue;
        } else if (v === '.') {
            if (seenDot || seenE) return false;
            seenDot = true;
        } else if (v === "e" || v === "E") {
            if (seenE || !seenNum) return false;
            seenNum = false, seenE = true, seenSign = false;
        } else if (v === "+" || v === "-") {
            if ((seenSign && !seenE) || seenNum || seenDot) return false;
            seenSign = true, seenNum = false;
        } else if (!isNaN(v)) {
            seenNum = true;
        } else {
            return false;
        }
    }
    return seenNum;
};
console.log(isNumber(".-4"))

var isNumber = function (s) {
    var seenDigit = false;
    var seenExponent = false;
    var seenDot = false;
    for (var i = 0; i < s.length; i++) {
        var curr = s[i];
        if (!isNaN(curr)) {
            seenDigit = true;
        } else if (curr == "+" || curr == "-") {
            if (i > 0 && s[i - 1] != "e" && s[i - 1] != "E") {
                return false;
            }
        } else if (curr == "e" || curr == "E") {
            if (seenExponent || !seenDigit) {
                return false;
            }
            seenExponent = true;
            seenDigit = false;
        } else if (curr == ".") {
            if (seenDot || seenExponent) {
                return false;
            }
            seenDot = true;
        } else {
            return false;
        }
    }
    return seenDigit;
};