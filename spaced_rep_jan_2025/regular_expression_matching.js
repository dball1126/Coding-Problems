/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sL = s.length, pL = p.length;
    const recurse = (i, j) => {
        if (i === sL && j === pL) return true;
        if (i >= sL || j >= pL) return false;

        if (s[i] === p[j] || p[j] === ".") {
            let one = false, two = false, three = recurse(i+1, j+1);
            if (p[j+1] === "*") {
                two = recurse(i+1, j+2)
                one = recurse(i+1, j)
            }
            return one || two
        }
        return false;
    }

    return recurse(0, 0)
};
console.log(isMatch( "aab", p = "c*a*b"))