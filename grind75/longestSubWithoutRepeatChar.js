// Sliding window
// Time & Space: O(n)...each index gets hit at most 2 times
var lengthOfLongestSubstring = function(str) {
    if (str.length <= 1) return str.length;
    let longest = -Infinity, curr = 0, currSet = new Set(), s = 0, e = 0

    while (e < str.length) { // slide right pointer right
        let v = str[e]
        while (currSet.has(v) && s < e) { // slide left pointer right
            currSet.delete(str[s])
            s++
            curr--
        }

        curr++
        currSet.add(v)
        if (curr> longest) longest = curr;
        e++
    }
    return longest;
};
console.log(lengthOfLongestSubstring(s = "pwwkew"))// = kew = 3
