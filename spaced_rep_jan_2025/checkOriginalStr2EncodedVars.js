/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var possiblyEquals = function(s1, s2) {
    
    const recurse = (i, j, diffi, diffj) => {
        if (i === s1.length && j === s2.length) return true;
        if (i >= s1.length || j >= s2.length) return false;

        if (diffi || diffj) {
            if (diffi) {
                if (!isNaN(s2[j])) {
                    if (recurse(i, j+1, diffi -1, diffj)) return true;
                }
                if (parseInt(s2[j]) - diffi >= 0) {
                    if (recurse(i, j+1, diffi - parseInt(s2[j]))) return true;
                }
                if (!isNaN(s2[j+1])) {
                    let sum = parseInt(s2[j] + s2[j+1])
                    // if (diffi - sum >= 0) {
                    //     if (recurse(i, ))
                    // }
                }
            }
        } else {
            if (isNaN(s1[i]) && isNaN(s2[j])) {
                if (s1[i] === s2[j]) return recurse(i+1, j+1);
                return false;
            }
        }
        
    

    }
    return recurse(0, 0);
};
console.log(possiblyEquals(s1 = "internationalization", s2 = "i18n"))