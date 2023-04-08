/**
 * use a map to store the string and [index, count]
 * Time and Space: O(n)
 */
var firstUniqChar = function(s) {
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            map.set(s[i], [i, 1])
        } else {
            map.get(s[i])[1]++
        }
    }

    for(let [k, v] of map) {
        if (v[1] === 1) return v[0]
    }
    return -1
};

console.log(firstUniqChar(s = "aabb"))