public class TreeNode {
    public var val: Int;
    public var left: TreeNode?
    public var right: Treenode?
    public init() {self.val = 0; self.left = nil; self.right = nil;}
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}

class Solution {
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        guard let node = root { return []}

        var result: [[Int]] = [], levels: [[TreeNode]] = [[node]]

        while levels.count > 0 {
            var currLevel: [TreeNode] = levels.removeFirst()
            var newLevel: [TreeNode] = []
            var currResult: [Int] = []
            for n in currLevel {
                currResult.append(n.val)
                if var left = n.left {
                    newLevel.append(left)
                }
                if var right = n.right {
                    newLevel.append(right)
                }
            }
            result.append(currResult)
            if newLevel.count > 0 {
                levels.append(newLevel)
            }
        }
        return result
    }
}