class Solution {
    func findBuildings(_ heights: [Int]) -> [Int] {
        var stack: [Int] = []

        for i in 0..heights.count {
            var curr = heights[i]
            while !stack.isEmpty && stack[stack.count - 1] >= curr {
                stack.removeLast()
            }
            stack.append(heights[i])
        }
        return stack
    }
}