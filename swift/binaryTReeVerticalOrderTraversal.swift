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
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil}
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val;
        self.left = left;
        self.right = right;
    }
}

// class Solution {
//     func verticalOrder(_ root: TreeNode?) -> [[Int]] {
//         var result: [[Int]] = []

//         var maxLeft: Int = Int.max, maxRight: Int = Int.min;

//         func getWidth(_ node: TreeNode?, _ width: Int)-> Int {
//             guard var n = node else { return 0 } 
//             maxLeft = min(width, maxLeft)
//             maxRight = max(width, maxRight)
//             getWidth(n.left, width - 1)
//             getWidth(n.right, width + 1)
//             return 0
//         }
//         getWidth(root, 0)
//         var width = abs(maxLeft) + maxRight + 1
//         var offSet = abs(maxLeft)
//         var order = Array(repeating: [], count: width)
//         var queue = [[[root, 0]]]

//         while queue.capacity > 0 {
//             var level = queue.removeFirst()
//             var newLevel:[Any] = []
//             for items in level {
//                 var idx = items[0]
//                 var node = items[1]


//             }
//         }
        
//         return result
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
import Foundation // For using `min`, `max`, and potentially `Date` if needed elsewhere

class Solution {
    func verticalOrder(_ root: TreeNode?) -> [[Int]] {
        guard let root = root else {
            return []
        }

        // --- Step 1: Determine the min and max horizontal width (column) ---
        // This is done to correctly size the `order` array.
        var minWidth = 0 // Initialize to 0, not infinity, as width starts at 0
        var maxWidth = 0 // Initialize to 0

        // Using a BFS-like approach to find min/max widths
        // Queue will store tuples of (TreeNode, horizontal_width)
        var widthQueue: [(TreeNode, Int)] = [(root, 0)]
        var head = 0 // Manual head for queue (to avoid performance hit of `removeFirst` on Array for large queues)

        while head < widthQueue.count {
            let (node, width) = widthQueue[head]
            head += 1

            minWidth = min(minWidth, width)
            maxWidth = max(maxWidth, width)

            if let leftNode = node.left {
                widthQueue.append((leftNode, width - 1))
            }
            if let rightNode = node.right {
                widthQueue.append((rightNode, width + 1))
            }
        }

        let totalWidth = maxWidth - minWidth + 1
        let offset = abs(minWidth) // Offset to convert negative widths to 0-based indices

        // --- Step 2: Perform BFS to populate the vertical order ---
        // `order` will be an array of arrays, where each inner array represents a vertical column
        // We initialize it with `totalWidth` empty arrays.
        var order = Array(repeating: [Int](), count: totalWidth)

        // The main BFS queue for traversal and value collection
        // Stores tuples of (TreeNode, horizontal_width)
        var mainQueue: [(TreeNode, Int)] = [(root, 0)]
        head = 0 // Reset head for this new queue

        while head < mainQueue.count {
            let (node, width) = mainQueue[head]
            head += 1

            let columnIndex = width + offset // Calculate the correct 0-based index for the `order` array
            order[columnIndex].append(node.val) // Add the node's value to the corresponding column

            // Enqueue children with their respective widths
            if let leftNode = node.left {
                mainQueue.append((leftNode, width - 1))
            }
            if let rightNode = node.right {
                mainQueue.append((rightNode, width + 1))
            }
        }

        return order
    }
}