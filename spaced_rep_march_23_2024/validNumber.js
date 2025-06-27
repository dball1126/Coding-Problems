//5. Valid Number

/**
 * @param {string} s
 * @return {boolean}
 */
// Two Pinter
var isNumber = function(str) {
    let s = 0, n = str.length
    let seenDot = false, seenSign = false, seenE = false, seenInt = false;

    const isInt = (v) => v >= "0" && v <= "9"
    const isSign = (v) => v === "+" || v === "-"
    const isE = (v) => v === "e" || v === "E"
    const isDot = (v) => v === "."

    while (s < n) {
        let v = str[s]
        let nx = str[s+1]
        if (isInt(v)) {
            seenInt = true;
            s++;
        } else if (isSign(v)  && (isInt(nx) || str[s+1] === ".")) {
            s++;
        } else if (isE(v) && !seenE) { 
            s++;
        } else if (isDot(v) && (seenInt || (nx === undefined || isInt(nx)))) {
            s++;
        } else {
            return false;
        }

        if (isSign(v)) seenSign = true;
        if (v === ".") seenDot = true;
        if (isE(v)) seenE = true;
        
    }
    return true;
};
console.log(isNumber( "99e2.5"))

// "a" = false
// "-.99" == true
// e. == false
// e 00.0 = true
// -90E3 // true
// +6e-1