// Space: O(1)
// Time: O(n * m)
var strStr = function(haystack, needle) {
    if (needle.length > haystack.length) return -1
    let i = 0;
    while (i < haystack.length) {

        let idx = i, s = 0;
        if (haystack[i] === needle[s]) {
            while (i < haystack.length && s < needle.length && haystack[i] === needle[s]) {
                if (s === needle.length-1) break;
                i++;
                s++;
            }
            if (s === needle.length-1 && needle[s] === haystack[i]) {
                return idx;
            } else {
                i = idx+1
            }
        } else {
            i++
        }
    }
    return -1
};
console.log(strStr(haystack = "bbbbbbbaa", needle = "bbbbbbaa")) // = 1
