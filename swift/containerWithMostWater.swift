class Solution {
    func maxArea(_ height: [Int]) -> Int {
        var area: Int = 0
        var lo: Int = height[0], hi = height[height.count - 1]

        while lo < hi {
            var h = min(height[lo], height[hi]) 
            var w: Int = hi - lo
            area = max(area, h * w)
            lo <= hi ? (lo += 1) : (hi -= 1)
        }
        return area
    }
}