/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(s) {
    let idx = 0, j = 0;
    while (j < s.length) {
        let c = 1;
        while (j+1 < s.length && s[j+1] === s[j]) {
            c++; j++;
        }
        j++;
        idx++;
        if (c > 1) {
            let cStr = c + "";
            let cIdx = 0;
            while (cIdx < cStr.length) {
                s[idx] = cStr[cIdx]
                idx++;
                cIdx++;
            }
        }
    }
    while (idx < s.length) s.pop();
    return idx;
};
console.log(compress(["a","a","a","b","b","a","a"]))