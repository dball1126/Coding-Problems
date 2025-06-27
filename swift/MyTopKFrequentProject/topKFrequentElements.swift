
// import HeapModule

// class Solution {
//     func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
//         let numsDict = nums.reduce(into: [:]) { $0[$1, default: 0] += 1 }
//         var heap: Heap<NumFreq> = []
        
//         for (num, freq) in numsDict {
//             heap.insert(NumFreq(num: num, freq: freq))
//             if heap.count > k {
//                 heap.removeMin()
//             }
//         }
        
//         return heap.unordered.map { $0.num }
//     }

//     struct NumFreq: Comparable {
//         let num: Int
//         let freq: Int
        
//         static func < (lhs: Solution.NumFreq, rhs: Solution.NumFreq) -> Bool {
//             lhs.freq < rhs.freq
//         }
//     }
// }

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
 }
// class Solution {
//     func preorderTraversal(_ root: TreeNode?) -> [Int] {
//         guard var n = root else { return [] }
//         return [n.val] + preorderTraversal(n.left) + preorderTraversal(n.right)
//     }
// }

// ROOT, LEFT, RIGHT
class Solution {
    func preorderTraversal(_ root: TreeNode?) -> [Int] {
        var curr: TreeNode? = root
        var result: [Int] = []
        var stack: [TreeNode] = []

        while !stack.isEmpty || curr != nil {
            if curr == nil { curr = stack.popLast()! }
            result.append(curr!.val)
            if var right: TreeNode = curr?.right {
                stack.append(right)
            }
            curr = curr?.right ?? nil
        }
        return result
    }
}