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
        
        var map: [Int: Node] = [:]
        var visited = Set<Int>()

        func dfs(_ root: Node?) -> Void {
            guard var n: Node = root else { return }
            if var item = map[n.val] {
                
            } else { map[n.val] = Node(n.val) }
            var newNode: Node = map[n.val]!

            visited.insert(newNode.val)
            for ele in n.neighbors {
                if var el: Node = map[ele!.val] {
                    
                } else { map[ele!.val] = Node(ele!.val) }

                var newChild: Node = map[ele!.val]!
                newNode.neighbors.append(newChild)
                if !visited.contains(newChild.val) {
                    visited.insert(newChild.val)
                    dfs(ele)
                }
            }
        }
        dfs(node)

        if var result = node {
            return map[result.val]
        } else { return nil }
    }
}