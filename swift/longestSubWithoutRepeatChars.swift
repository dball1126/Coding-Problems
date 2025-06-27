// Sliding Window
// Time And Space: O(n)
class Solution {
    func lengthOfLongestSubstring(_ str: String) -> Int {
        var lo = str.startIndex
        var hi = lo
        var map:[Character: Int] = [:]
        var longestSubstring: Int = 0

        while hi < str.endIndex {
            map[str[hi], default: 0] += 1

            while var item = map[str[hi]], item > 1 {
                if var c = map[str[lo]] {
                    map[str[lo]] = c - 1
                }
                lo = str.index(after: lo)
            }
            hi = str.index(after: hi)

            longestSubstring = max(longestSubstring, str.distance(from: lo, to: hi))
        }
        return longestSubstring
    }
}

