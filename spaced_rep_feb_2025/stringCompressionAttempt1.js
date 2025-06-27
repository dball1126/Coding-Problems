/**
 * @param {character[]} chars
 * @return {number}
 */
// Time: O(n)
// Space: O(1)
var compress = function(chars) {
    let idx = 0, j = 0, len = chars.length;
    while (j < len) {
        chars[idx] = chars[j];
        let c = 1;
        while (j + 1 < len && chars[j+1] === chars[j]) {
            j++;
            c++;
        }
        idx++; j++;
        if (c > 1) {
            c += "";
            let i = 0;
            while (i < c.length) {
                chars[idx] = c[i];
                idx++;
                i++;
            }
        }
    }
    while (chars.length > idx) chars.pop();
    return idx;
};
console.log(compress(hars = ["a","a","a","b","b","a","a"]))
// = [ 'a', '3', 'b', '2', 'a', '2' ]   = 6

