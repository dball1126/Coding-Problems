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
        self.random = nil
        self.next = nil
    }
 }

class Solution {
    func copyRandomList(_ head: Node?) -> Node? {
        if  head == nil { return nil }
        var curr = head
        var map:[ObjectIdentifier: Node] = [:]

        while curr != nil {
            var newNode = ObjectIdentifier(curr!)
            map[newNode] = Node(curr!.val)

            if var random = curr?.random {
                var r = ObjectIdentifier(random)
                map[r] = Node(random.val)
                map[newNode]?.random = map[r]
            }   

            if var next = curr?.next {
                var r = ObjectIdentifier(next)
                map[r] = Node(next.val)
                map[newNode]?.next = map[r]
            }

            curr = curr?.next ?? nil
        }
        var result = map[ObjectIdentifier(head!)]
        return result
    }
}