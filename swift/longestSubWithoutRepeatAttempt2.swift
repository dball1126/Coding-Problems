class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var maxLen: Int = 0
        var lo = s.startIndex, hi = s.startIndex
        var map: [Character:Int] = [:]
        while hi < s.endIndex {
            map[s[hi], default: 0] += 1
            while var item = map[s[hi]], item > 1 {
                map[s[lo]]! -= 1
                lo = s.index(after: lo)
            }
            hi = s.index(after: hi)
            maxLen = max(maxLen, s.distance(from: lo, to: hi))
        }
        return maxLen
    }
}