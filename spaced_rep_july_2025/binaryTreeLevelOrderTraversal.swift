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
    public init() { self.val = 0; self.left = nil; self.right = nil;}
 }
class Solution {
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        guard var node = root else { return []}
        var result:[[Int]] = []
        var levels: [[TreeNode]] = [[node]]
        while !levels.isEmpty {
            var level: [TreeNode] = levels.removeFirst()
            var newLevel: [TreeNode] = []
            var vals: [Int] = []
            for n in level {
                vals.append(n.val)
                if var left = n.left { newLevel.append(left)}
                if var right = n.right { newLevel.append(right)}
            }
            result.append(vals)
            if !newLevel.isEmpty {levels.append(newLevel)}
        }
        return result
    }
}