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
    public init() { self.val = 0; self.left = nil; self.right = nil; }
 }
class Solution {
    func verticalOrder(_ root: TreeNode?) -> [[Int]] {
        guard var r = root else { return []}
        var minL: Int = 0, maxR: Int = 0

        func dfs(_ node: TreeNode?, _ path: Int) -> Int {
            guard var n = node else { return 0 }
            minL = min(minL, path)
            maxR = max(maxR, path)
            dfs(n.left, path - 1)
            dfs(n.right, path + 1)
            return path
        }
        dfs(r, 0)
        var total = abs(minL) + 1 + maxR
        var result: [[Int]] = Array(repeating: [], count: total)
        var levels: [[(TreeNode, Int)]] = [[(r, 0)]]

        while !levels.isEmpty {
            var level: [(TreeNode, Int)] = levels.removeFirst()
            var newLevel: [(TreeNode, Int)] = []
            for (nde, col) in level {
                result[col + abs(minL)].append(nde.val)
                if var left = nde.left { newLevel.append((left, col - 1)) }
                if var right = nde.right { newLevel.append((right, col + 1)) }
            }
            if !newLevel.isEmpty { levels.append(newLevel) }
        }
        return result
    }
}
