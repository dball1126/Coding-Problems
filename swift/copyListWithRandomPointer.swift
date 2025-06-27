/**
 * Definition for a Node.
 * public class Node {
 *     public var val: Int
 *     public var next: Node?
 *     public var random: Node?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.next = nil
 *    	   self.random = nil
 *     }
 * }
 */

 public class Node {
    public var val: Int
    public var next: Node?
    public var random: Node?
    public init(_ val: Int) {
        self.val = val
        self.next = nil
        self.random = nil
    }
 }

class Solution {
    func copyRandomList(_ root: Node?) -> Node? {
        if root == nil { return root }
        var node = root
        var map: [ObjectIdentifier: Node] = [:]

        while node != nil {
            var curr = node!
            var newNode = map[ObjectIdentifier(curr), default: Node(curr.val)]

            if var random = curr.random {
                var r = map[ObjectIdentifier(random), default: Node(random.val)]
                newNode.random = r
            }

            if var next = curr.next {
                var nx = map[ObjectIdentifier(next), default: Node(next.val)]
                newNode.next = nx
            }

            node = node?.next ?? nil
        }

        return map[ObjectIdentifier(node!)] 
    }
}