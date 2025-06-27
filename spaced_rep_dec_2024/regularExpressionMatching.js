/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0, j = 0;
    
    while (i < s.length || j < p.length) {
        if (i >= s.length) return true;
        if (j >= p.length) return false;

        let curr = p[j]
        if (curr === ".") {
            i++; j++;
        } else if (curr === "*") {
            while (s[i] === p[j-1] || p[j-1] === "." && i < s.length) {
                i++;
            }
            j++;
        } else {
            if (curr === s[i]) {
                i++; j++;
            } else {
                j++;
            }
        }
    }
    return true;
};
console.log(isMatch( s = "aab", p = "c*a*b"
))