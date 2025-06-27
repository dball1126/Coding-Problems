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
    public init() { self.val = 0; self.left = nil; self.right = nil }
 }
class Solution {
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        guard var node = root else { return [] }
        var allLevels:[[Int]] = []
        var queue: [[TreeNode]] = [[node]]
        
        while !queue.isEmpty {
            var currLevel: [TreeNode] = queue.removeFirst()
            var newLevel: [TreeNode] = []
            var vals: [Int] = []

            for n in currLevel {
                vals.append(n.val)
                if var left = n.left {newLevel.append(left)}
                if var right = n.right {newLevel.append(right)}
            }
            allLevels.append(vals)
            if newLevel.count > 0 { queue.append(newLevel) }
        }
        return allLevels
    }
}