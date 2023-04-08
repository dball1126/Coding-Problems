/**
 * Use Sliding Window Technique.
 * Time complexity is O(n) ....O(2n) = O(n)
 * Space complexity is O(1). The map will never be over the size 26...alphabet
 */
var checkInclusion = function(s1, s2) {
    let [s, e, count, map] = [0,0,0, new Map()]

    // build map of first string
    for (let i = 0; i < s1.length; i++) {
        if(!map.has(s1[i])) map.set(s1[i], 0)
        map.set(s1[i], map.get(s1[i]) + 1)
    }
    count = map.size

    while (e < s2.length) { // start sliding e(end) pointer right
        let c = s2[e];
        if (map.has(c)) {
            map.set(c, map.get(c) - 1)
            if (map.get(c) === 0) count--;
        }

        // The answer may be between these two pointers....we will check.
        // Start sliding s(start) pointer right
        while (count === 0) {
            c = s2[s]
            if ((e - s + 1) === s1.length) return true // count is 0 and the substring is the exact length of s1....must be permutation

            if (map.has(c)) {
                if (map.get(c) === 0) count++;
                map.set(c, map.get(c) + 1)
            }
            s++;
        }
        e++;
    }
    return false;
};

console.log(checkInclusion(s1 = "aad", s2 = "oofisjdfoiajoijoijdoijoijdaoijdd"))