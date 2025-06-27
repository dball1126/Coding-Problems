/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0, j = 0, n = s.length, m = p.length;

    while (j < m) {
        if (i >= n) return false
        if (p[j] >= "a" && p[j] <= "z") {
            if (p[j+1] === "*") {
                j++;
            } else if (s[i] !== p[j]) {
                return false;
            } else {
                i++; j++;
            }
        } else if (p[j] === ".") {
            i++; j++;
        } else if (p[j] === "*") {
            let char = p[j-1]
            if (char === ".") return true
            while (s[i] === char) i++;
            j++;
        } else {
            return false
        }
    }
    return i === n && j === m
};
console.log(isMatch(s ="aab", p = "c*a*b"))