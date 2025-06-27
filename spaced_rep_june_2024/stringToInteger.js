/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let max = 2**31 -1, min = -(2**31)
    let positive, negative
    let curr = "";
    let i = 0, n = s.length

    // pre-processing
    while (s[i] === " ") i++

    if (s[i] === "+") {
        positive = true; i++
    } else if (s[i] === "-") {
        negative = true; i++
    }

    if (negative || positive) {
        while (s[i] === "0") i++;
    }

    // traversing
    while (i < n) {
        let v = s[i]
        if ((v >= "0" && v <= "9")) {
            curr += v;
        } else {
            break;
        }
        i++
    }
    if (!curr.length) return 0
    
    let value = parseInt(curr)
    if (negative ) {
        if(-value < min) {
            return min
        } else {
            return -value
        }
    } else {
        if (value > max) {
            return max
        } else {
            return value;
        }
    }
};

console.log(myAtoi("+-12"))