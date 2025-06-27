/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var neighbors: [Node?]
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.neighbors = []
 *     }
 * }
 */

 public class Node {
    public var val: Int;
    public var neighbors: [Node?];
    public init(_ val: Int) {
        self.val = val;
        self.neighbors = [];
    }
 }

class Solution {
    func cloneGraph(_ node: Node?) -> Node? {
        guard var root = node else { return node }
        var visited = Set<Int>();
        var map: [Int: Node] = [:]
        map[root.val] = Node(root.val)
        var stack: [Node] = [root]

        while !stack.isEmpty {
            guard var n = stack.popLast() else { continue }
            guard var newNode = map[n.val] else { continue }
            visited.insert(n.val)

            for child in n.neighbors {
                guard var c = child else { continue }
                
                if var newchild = map[c.val] {
                } else { map[c.val] = Node(c.val)}
                
                var newChild = map[c.val, default: Node(c.val)]
                newNode.neighbors.append(newChild)
                if (!visited.contains(c.val)) {
                    stack.append(c)
                    visited.insert(c.val)
                }
            }
        }
        if var result = map[root.val] {
            return result
        }
        return root
    }
}