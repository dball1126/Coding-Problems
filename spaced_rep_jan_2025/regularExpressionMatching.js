/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    
    let recurse = (i, j) => {

        if (i === s.length-1 && j === p.length-1) return true;
        if (i >= s.length || j >= p.length) return false;

        while (i < s.length && j < p.length) {
            if (s[i] === p[j] || p[j] === ".") {
                i++; j++;
            } else if (p[j] === "*") {
                
            }
        }
        return i === s.length-1 && j === p.length-1
    }

    return isMatch(i, j)
};