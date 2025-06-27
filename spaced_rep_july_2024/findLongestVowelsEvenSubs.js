/**
 * @param {string} s
 * @return {number}
 */
// Time: O(n^2)....n * (n + n)
// Space: O(n)
var findTheLongestSubstring = function(str) {
    let low = 0, high = 0, n = str.length

    for (let r = 0; r < n; r++) {
        let vow = new Map([["a", 0],["e", 0],["i", 0],["o", 0],["u", 0]])
        if (vow.has(str[r])) {
            vow.set(str[r], vow.get(str[r]) + 1);
        }

        for (let c = 0; c < r; c++) {
            if (vow.has(str[c])) {
                vow.set(str[c], vow.get(str[c]) + 1);
            }
        }

        for (let c = 0; c < r; c++) {
            let valid = true;
            for (let [k, v] of vow) {
                if (v % 2 !== 0) {
                    valid = false;
                }
            }
            if (valid) {
                if ((high - low)  <= (r - c)) {
                    low = c; high = r;
                }
            }
            if (vow.has(str[c])) {
                vow.set(str[c], vow.get(str[c]) -1)
            }
        }
    }
    let v = high - low + 1
    if ( v === 1 && "aeiou".includes(str[high- low])) {
        return 0
    }
    return (high - low + 1)
}

console.log(findTheLongestSubstring("a"))