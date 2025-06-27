class Solution {
    func insert(_ intervals: [[Int]], _ newInterval: [Int]) -> [[Int]] {
        var newInter: [Int] = newInterval
        var result: [[Int]] = []
        var merged: Bool = false

        for interval in intervals {
            var x: Int = newInter[0], y: Int = newInter[1]
            if merged {
                result.append(interval)
                continue
            }
            if y < interval[0] {
                result.append(newInter)
                result.append(interval)
                merged = true
            } else if (x >= interval[0] && y <= interval[1]) || 
                        (y >= interval[0] && y <= interval[1]) || 
                        (interval[0] >= x && interval[0] <= y) ||
                        (interval[1] >= x && interval[1] <= y) {
                newInter[0] = min(interval[0], x)
                newInter[1] = max(interval[1], y)
            } else {
                result.append(interval)
            }
        }
        if !merged { result.append(newInter)}
        return result
    }
}

var sol = Solution()
print(sol.insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))