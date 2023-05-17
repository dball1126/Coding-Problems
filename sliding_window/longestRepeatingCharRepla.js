// Sliding Window
// Time and Space: O(n) ... str elements, k elements is maxed at n
var characterReplacement = function(str, k) {
    let s = 0, e = 0, chars = new Map(), longest = 0;
    
    while (e < str.length) {
        if (!chars.has(str[e])) chars.set(str[e], 0)
        chars.set(str[e], chars.get(str[e]) + 1)

        while (chars.size > k+1) {
            chars.set(str[s], chars.get(str[s]) - 1)
            if (chars.get(str[s]) === 0) chars.delete(str[s])
            s++
        }

        let [k1, k2] = Array.from(chars.keys());
        if (k1 && k2) {
            let key = k1 === str[e] ? k2 : k1;

            while (chars.get(key) > k) {
                chars.set(str[s], chars.get(str[s]) - 1)
                if (chars.get(str[s]) === 0) chars.delete(str[s])
                s++
            }
        }
        let v = (e - s) + 1
        longest = Math.max(longest, v)
        e++
    }
    return longest
};

console.log(characterReplacement(s = "PERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF", k = 4))