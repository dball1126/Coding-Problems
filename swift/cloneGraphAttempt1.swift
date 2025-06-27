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
        self.val = val
        self.neighbors = []
    }
 }

class Solution {
    func cloneGraph(_ node: Node?) -> Node? {
        guard var curr = node else { return node }
        var visited = Set<ObjectIdentifier>()
        var map: [ObjectIdentifier : Node] = [:]
        var queue: [Node] = [curr]
        var result: Node?
        while !queue.isEmpty {
            var node: Node = queue.removeFirst()
            if map[ObjectIdentifier(node)] == nil {
                map[ObjectIdentifier(node)] = Node(node.val)
            }
            var currNode: Node = map[ObjectIdentifier(node)]!
            if result == nil { result = currNode}
            visited.insert(ObjectIdentifier(node))

            for nde in node.neighbors {
                if map[ObjectIdentifier(nde!)] == nil {
                    map[ObjectIdentifier(nde!)] = Node(nde!.val)
                }
                var newNde = map[ObjectIdentifier(nde!)]
                currNode.neighbors.append(newNde!)
                if !visited.contains(ObjectIdentifier(nde!)) {
                    queue.append(newNde!)
                }
            }
        }
        return result
    }
}