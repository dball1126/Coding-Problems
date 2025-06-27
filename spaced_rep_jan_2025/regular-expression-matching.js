/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let sLen = s.length, pLen = p.length;
    const recurse = (i, j) => {
        if (i === sLen && j === pLen) return true;
        if (i >= sLen || j >= pLen) return false;

        if (s[i] === p[j] || p[j] === ".") {
            let optionOne = recurse(i+1, j+1), optionTwo = false;

            if (p[j+1] === "*") {
                optionOne = recurse(i+1, j+1)
            }
            return optionOne || optionTwo
        } else if (p[j] === "*") {
            let optionOne = false, option2 = r
            if (s[i] === p[j-1] || p[j-1] === ".") {
                if (i+1 === sLen) {
                    optionOne = recurse(i+1, j+1)
                } else {
                    optionOne = recurse(i+1, j)
                }

            } else {
                return false
            }
        }

        return i === sLen && j === pLen
    }

    return recurse(0, 0)
};