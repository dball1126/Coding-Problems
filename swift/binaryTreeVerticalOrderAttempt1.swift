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
    public init() { self.val = 0; self.left = nil; self.right = nil}
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil }
 }
class Solution {
    func verticalOrder(_ root: TreeNode?) -> [[Int]] {
        guard var node = root else { return []}
        var result: [[Int]] = []
        var cols: [Int : [Int]] = [:]
        var map: [Int:[Int]]
        var queue: [(TreeNode, Int)] = [(node, 0)]

        while !queue.isEmpty {
            var next: [(TreeNode, Int)] = []

            for (node, val) in queue {
                cols[val, default: []].append(node.val)
                if var left = node.left {
                    next.append((left, val - 1))
                }
                if var right = node.right {
                    next.append((right, val + 1))
                }
            } 
            if !next.isEmpty { queue = next}           
           
        }
        return Array(cols.values)
    }
}