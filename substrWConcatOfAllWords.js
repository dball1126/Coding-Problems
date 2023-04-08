/**
 * Use Sliding Window technique.
 * Calculate window size, create map and make sure array result is unique
 * Time Complexity O(N * M) N for str and M for every time we do a slice/substring of M elements inside of the n loop
 * It's possible that the Window could be the entire length of the word inside of M if there is only one word.
 * O(2N) = O(N)
 * Space Complexity O(M) inserting the words into the map. Result is also an array of m elements
 * O(2M) = O(M)
 */
var findSubstring = function(str, words) {
    let [s, e, count, w, result, map] = [0,0,0,words[0].length, [], new Map()]

    // build map of words
    for (let i = 0; i < words.length; i++) {
        if (!map.has(words[i])) map.set(words[i], 0)
        map.set(words[i], map.get(words[i]) + 1)
    }
    count = map.size;

    while ((e + w - 1) < str.length) { // start sliding e(end) pointer right
        let word = str.slice(e, e + w)

        if (map.has(word)) {
            map.set(word, map.get(word) - 1)
            if (map.get(word) === 0) count--;
        }

        // if count is 0....we have all the words...check to see if the substring is valid.
        while (count === 0) { // start sliding s(start) pointer right
            let inFront = false

            // Edge case: the concatenated word could be between our two pointers.
            if (w * map.size === (e - s)) {
                inFront = true
                let val = Array.from(map.values()).find(v => v !== 0)
                if (val !== undefined) {
                    inFront = false
                } else {
                    for (let i = s; i < e; i += w) {
                        word = str.slice(i, i + w)
                        if (!map.has(word)) {
                            inFront = false
                            break
                        }
                    }
                }
            }

            // length of valid concatenated word.....and edge case
            if (w * map.size === (e - s + w) || inFront) {
                word = str.slice(s, e  + w)
               result.push(s)
            }

            word = str.slice(s, s + w)
            if (map.has(word)) {
                if (map.get(word) === 0) count++
                map.set(word, map.get(word) + 1)
            }
            s++
        }
        e++
    }
    return result;
};

console.log(findSubstring("ababababab",
["ababa","babab"]))
