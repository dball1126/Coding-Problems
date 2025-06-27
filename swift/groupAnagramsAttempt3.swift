class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var groups: [String: [String]] = [:]

        guard var a = Character("a").asciiValue else { return [] }
        var aIdx: Int = Int(a)

        for s in strs {
            var arr: [Int] = Array(repeating: 0, count: 26)

            for c in s {
                guard var cIdx = c.asciiValue else { continue }
                var idx = Int(cIdx) - aIdx
                if idx >= 0 && idx <= 26 {
                    arr[idx] += 1
                } 
            }
            var key = ""

            for (i, n) in arr.enumerated() {
                if i > 0 {
                    key += "(\(i):\(n))"
                }
            }
            groups[key, default: []].append(s)
        }
        return Array(groups.values)
    }
}