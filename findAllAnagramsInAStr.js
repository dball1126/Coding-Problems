/**
 * Use Sliding Window technique.
 * Create a map of p string. Collect results in an array.
 * Time Complexity is O(N + M). It's O(2N). 1 for each pointer. O(2N) = O(N)
 * M is for iterating over p to create the map
 * Space Complexity is O(1). We use a map....the map size will not exceed 26(alphabet).
 */
var findAnagrams = function(str, p) {
    let [s, e, count, result, map] = [0,0,0,[],new Map()];
    // create map of p elements
    for (let i = 0; i < p.length; i++) {
        if (!map.has(p[i])) map.set(p[i], 0)
        map.set(p[i], map.get(p[i]) + 1)
    }
    count = map.size;

    while (e < str.length) { // begin sliding the e(end) pointer right.
        let c = str[e]

        if (map.has(c)) {
            map.set(c, map.get(c) - 1)
            if (map.get(c) === 0) count--;
        }

        /**
         * There may be a valid condition here. All letters we need should be between s and e.
         * We will find out by checking and sliding the s(start) pointer right.
         */
        while (count === 0) { 
            c = str[s]

            // if we have this substring length we're guaranteed to have the correct letters because count === 0
            if ((e - s + 1) === p.length) {
                result.push(s)
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



console.log(findAnagrams(s = "abab", p = "ab"))