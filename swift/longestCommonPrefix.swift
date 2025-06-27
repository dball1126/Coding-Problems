class Node {
    var count: Int
    var isWord: Bool
    var keys:[Character:Node]
    init() { self.count = 0; self.keys = [:]; self.isWord = false}
}

class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        var longest = ""
        if strs.isEmpty { return ""}
        else if strs.count == 1 { return strs[0] }
        var len = strs[0]

        for i in len.indices {
            var char = ""
            for j in 1..<strs.count{
                var w1: String = strs[j-1], w2: String = strs[j]
                var c1: String.Index
                var c2: String.Index
                if i < w1.endIndex && i < w2.endIndex {
                    c1 = w1.index(i, offsetBy: 0)
                    c2 = w2.index(i, offsetBy: 0)
                    if c1 == nil || c2 == nil { return longest }
                    if w1[c1] != w2[c2] { return longest }
                    if w1[i] != w2[i] { return longest}
                } else { 
                    return longest 
                }

                if j == strs.count-1 {
                    char = String(w1[c1])
                }

            }
            if !char.isEmpty { longest += char }
        }
        return longest
    }
}
var sol = Solution()
print(sol.longestCommonPrefix(["ab", "a"]))