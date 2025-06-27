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
    public var val: Int
    public var neighbors: [Node?]
    public init(_ val: Int) {
        self.val =  val
        self.neighbors = []
    }
}

class Solution {
    func cloneGraph(_ node: Node?) -> Node? {
        guard var root = node else { return node }
        var map: [Int : Node] = [:]
        var newNode: Node
        var visited = Set<Int>()

        func dfs(_ nde: Node?) -> Node? {
            guard var n = nde else { return nde }
            if map[n.val] == nil { map[n.val] = Node(n.val)}
            var newNode: Node = map[n.val]!
            visited.insert(n.val)

            for item in n.neighbors {
                if map[item!.val] == nil { map[item!.val] = Node(item!.val) }
                var newItem = map[item!.val]
                newNode.neighbors.append(newItem)
                if !visited.contains(newItem!.val) {
                    visited.insert(newItem!.val)
                    dfs(newItem)
                }
            }
            return newNode
        }
        dfs(root)
        return map[root.val]
    }
}