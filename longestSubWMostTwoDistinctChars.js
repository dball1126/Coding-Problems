/**
 * Use Sliding Window Technique.
 * Use map and the map size as the count.
 * Time Complexity is O(n). both e and s pointers touch every str index at most twice.
 * Space Complexity is O(1). The map that we use never goes above size 2.
 */
var lengthOfLongestSubstringTwoDistinct = function(str) {
    if (str.length <= 2) return str.length;
    let [e, s, map, result] = [0, 0, new Map(), -Infinity];
    
    while (e < str.length) { // start sliding e(end) pointer right
        let [c, f] = [str[e], str[e + 1]]
        if (!map.has(c)) map.set(c, 0)
        map.set(c, map.get(c) + 1)

        // detect third character will throw us out of sync
        if (map.size === 2 && (f === undefined || !map.has(f))) {
            
            while (map.size === 2) { // start sliding s(start) pointer right
                c = str[s]
                result = Math.max(result, (e - s + 1 ))
                map.set(c, map.get(c) - 1)
                if (map.get(c) === 0) map.delete(c)
                s++;
            }
        }
        e++;
    }
    return Math.max(result, e - s)
};

console.log(lengthOfLongestSubstringTwoDistinct(  s = "eceba"))