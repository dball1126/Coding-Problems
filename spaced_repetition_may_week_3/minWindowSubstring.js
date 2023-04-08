/**
 * Sliding window, map for t variable, start both pointers at 0
 * Time: O(n + m) n for s, and m for t
 * Space: O(m) m for t
 */
var minWindow = function(str, t) {
    let map = new Map(), count = 0, s = 0, e = 0, result = "";

    for (let i = 0; i < t.length; i++) {
        if (!map.has(t[i])) map.set(t[i], 0)
        map.set(t[i], map.get(t[i]) + 1)
    }
    count = map.size;

    while (e < str.length) { // slide right pointer 

        if (map.has(str[e])) {
            map.set(str[e], map.get(str[e]) - 1)
            if (map.get(str[e]) === 0) count--
        }
        
        while (count <= 0) { // slide left pointer
            let sub = str.substring(s, e + 1)

            if (!result) {
                result = sub
            } else {
                if (sub.length < result.length)
                    result = sub
            }

            if (map.has(str[s])) {
                map.set(str[s], map.get(str[s]) + 1)
                if (map.get(str[s]) === 1) count++
            }
            s++
        }
        e++
    }
    return result;
};

console.log(minWindow(s = "ADOBECODEBANC", t = "ABC"))