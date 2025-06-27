class Solution {
    func sortColors(_ nums: inout [Int]) -> [Int] {
        var len = nums.count
        if nums.count <= 1 { return nums }
        
        func partition(_ l: inout Int,_ r: inout Int) -> Int {
            var pivot = (r + l) / 2
            while l <= r {
                while nums[l] < pivot { l += 1 }
                while nums[r] > pivot { r -= 1 }
                if l <= r {
                    nums.swapAt(l, r)
                    l += 1
                    r -= 1
                }
            }
            return l
        }
        var stack: [[Int]] = [[0, len-1]]
        while !stack.isEmpty {
            guard var arr = stack.popLast() else { continue }
            var l = arr[0], r = arr[1]
            if l >= r { continue }
            var leftIdx = partition(&l, &r)
            if (leftIdx - 1) > l { stack.append([l, leftIdx - 1])}
            if leftIdx < r { stack.append([leftIdx, r]) }
        }
        return nums
    }
}
print("*****************************")
print("*****************************")
var sol = Solution()
var nums: [Int] = [2,1,2,0]
print(sol.sortColors(&nums))
print("*****************************")
print("*****************************")
