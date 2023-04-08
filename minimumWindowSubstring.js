/**
 * Create a map of the count of letters in the t string.
 * Set a result as an empty "";
 * Iterate over the s string. Decrement from the map until goal is reached.
 * Count duplicates, but only decrement count when necessary.
 * Record goal. Slide left pointer right, decrement and continue.
 * Time Complexity O(N + M) N for the string and M for the t string.
 * Space Complexity O(1)
 */
var minWindow = function(str, t) {
    let [s, e, result, map, count] = [0,0,"",new Map(),0];

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) map.set(t[i], 0);
        map.set(t[i], map.get(t[i]) + 1)
    }
    count = map.size

    while (e < str.length) { // slide right pointer right
        const c = str[e]

        if (map.has(c)) {
            map.set(c, map.get(c) - 1)
            if (map.get(c) === 0) count--;
        }

        while (count === 0) { // slide left pointer right
            const c = str[s];

            if (result === "" || result.length > (e - s + 1)) {
                result = str.slice(s, e + 1)
            }

            if (map.has(c)) {
                if (map.get(c) === 0) count++;
                map.set(c, map.get(c) + 1)
            }
            s++;
        }
        e++;
    }

   return result;
};


console.log(minWindow(s = "aa", t = "aa"))
