/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = new Map();
    const recurse = (i, j) => {
        if (i === s.length && j >= p.length) return true;
        if (j >= p.length) return false;
        let k = i +":"+j;
        if (memo.has(k)) return memo.get(k);
        let v1 = false, v2 = false, v3 = false;

        if (s[i] === p[j] || p[j] === '.') {
            v1 = recurse(i+1, j+1);
            if (v1) return true;
        }
        if (p[j+1] === '*') {
            v2 = recurse(i, j+2);
            if (v2) return true;
            if (i < s.length && (p[j] === s[i] || p[j] === '.')) {
                v3 = recurse(i+1, j);
                if (v3) return true;
            }
        }
        memo.set(k, v1 || v2 || v3);
        return v1 || v2 || v3;
    }
    return recurse(0 , 0);
};
console.log(isMatch("aa", p = "a*"))