/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let set = new Set();
    for (let v of t) {
        set.add(v);
    }
    let newSet = new Set();
    for (let v of s) {
        newSet.add(v);
    }
};