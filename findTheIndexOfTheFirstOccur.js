// Sliding Window
// Time O(n), Space: O1
var strStr = function(haystack, needle) {
    let count = needle.length, s = 0, e = 0, idx = 0

    while (e < haystack.length) {
        let curr = haystack[e], ele = needle[idx]
        if ( curr === ele ) {
            count--
            idx++
            if (count === 0) return s
            e++
        } else {
            count = needle.length
            idx = 0
            if (s === e) {
                e++
                s++
                idx++
            } else {
                s++
                while (s < e) {
                    s++
                }
            }
        }
    }
    return -1
};

console.log(strStr(haystack = "sssadss", needle = "ssad"))