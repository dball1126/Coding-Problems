class Solution {
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        
        var map: [String: [String]] = [:]

        guard var aVal = Character("a").asciiValue else { return [] }

        for s in strs {
            var arr:[Int] = Array(repeating: 0, count: 26)
            for c in s {

                guard var cVal = c.asciiValue else { continue }
                var idx: Int = Int(cVal - aVal)
                if idx >= 0 && idx <= 26 {
                    arr[idx] += 1
                }
            }
            var key = ""
            for (i, v) in arr.enumerated() {
                if i > 0 {
                    key += "\(i):\(v):"
                }
            }
            map[key, default: []].append(s)
        }
        return Array(map.values)
    }
}