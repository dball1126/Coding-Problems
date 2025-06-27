class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var groups: [String: [String]] = [:]
        guard let a = Character("a").asciiValue else { return [] }


        for s in strs {
            var counts: [Int] = Array(repeating: 0, count: 26)
            for c in s {
                guard let v = c.asciiValue else { continue }
                let idx = Int(v) - Int(a)

                if (idx >= 0 && idx <= 26) {
                    counts[idx] += 1
                }
            }
            var key = ""
            for (i, v) in counts.enumerated() {
                if v > 0 {
                    key += "\(i):\(v)"
                }
            }
            groups[key, default: []].append(s)
        }
        return Array(groups.values)
    }
}