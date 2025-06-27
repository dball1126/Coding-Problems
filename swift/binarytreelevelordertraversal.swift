/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() {self.val = 0; self.left = nil; self.right = nil}
}

class Solution {
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        var result: [[Int]] = []
        guard var node = root else { return result }
        var levels: [[TreeNode]] = [[node]]

        while !levels.isEmpty {
            let level = levels.removeFirst()
            var newLevel: [TreeNode] = []
            var nums: [Int] = []
            for var nde in level {
                nums.append(nde.val)
                if var left = nde.left  { newLevel.append(left)}
                if var right = nde.right { newLevel.append(right)}
            }
            if !newLevel.isEmpty {levels.append(level)}
            result.append(nums)
        }
        return result
    }
}