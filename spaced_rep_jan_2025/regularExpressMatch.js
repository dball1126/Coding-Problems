/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sL = s.length, pL = p.length;
    
    const recurse = (i, j) => {
        if ( i === sL.length && j === p.length) return true
        if (i >= sL || j >= pL) return false;
        let one = false, two = false, three = false
        if (s[i] === p[j] || p[j] === ".") {
            one = recurse(i+1, j+1)

            if (p[j+1] === "*") {
                two = recurse(i+1, j)
                three = recurse(i+1, j+2)
            }
            return one || two || three
        }
        return i === sL.length && j === p.length
    }
    return recurse(0, 0);
};

console.log(isMatch("aa", p = "a*"))