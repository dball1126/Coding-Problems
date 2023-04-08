/**
 * Time Complexity O(n)
 * Space Complexity O(1)
 */

var countGoodSubstring = function(s) {
    let result = 0;
    for (let i = 0; i < s.length-2; i++) {
        let [one, two, three] = [s[i], s[i+1], s[i+2]]
        if (one !== two  && two !== three && one !== three) result += 1;
    }
    return result;
};

console.log(countGoodSubstrings( s = "xyzzaz"))