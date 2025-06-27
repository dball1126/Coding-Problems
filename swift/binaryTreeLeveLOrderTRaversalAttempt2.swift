
  public class TreeNode {
      public var val: Int
      public var left: TreeNode?
      public var right: TreeNode?
      public init() { self.val = 0; self.left = nil; self.right = nil; }
      public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
      public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
          self.val = val
          self.left = left
          self.right = right
      }
  }
 
class Solution {
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        var result: [[Int]] = []
        guard var node = root else { return result }
        var queue: [[TreeNode]] = [[node]]

        while !queue.isEmpty {
            var level = queue.removeFirst()
            var vals: [Int] = []
            var newLevel: [TreeNode] = []
            for n in level {
                vals.append(n.val)
                if var left = n.left { newLevel.append(left)}
                if var right = n.right { newLevel.append(right)}

            }
            if !newLevel.isEmpty { queue.append(newLevel)}
            if !vals.isEmpty { result.append(vals)}
        }

        return result
    }
}