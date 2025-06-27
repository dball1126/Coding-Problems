class Solution {
    func findBuildings(_ heights: [Int]) -> [Int] {
        var stack:[Int] = []

        for (i, n) in heights.enumerated() {
            let curr: Int = heights[i]

            while !stack.isEmpty && heights[stack[stack.count - 1]] <= curr {
                stack.popLast()
            }
            stack.append(i)
        }
        return stack
    }
}