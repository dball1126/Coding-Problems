
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
    func copyRandomList(_ head: Node?) -> Node? {
        var curr: Node? = head;
        var map: [ObjectIdentifier: Node] = [:]
        var result: Node?;

        while curr != nil {
            if map[ObjectIdentifier(curr!)] == nil {
                map[ObjectIdentifier(curr!)] = Node(curr!.val)
            }
            var newNode = map[ObjectIdentifier(curr!)]
            if result == nil { result = newNode}

            if var random = curr?.random {
                if map[ObjectIdentifier(random)] == nil {
                    map[ObjectIdentifier(random)] = Node(random.val)
                }
                newNode?.random = map[ObjectIdentifier(random)]
            }

            if var next = curr?.next {
                if map[ObjectIdentifier(next)] == nil {
                    map[ObjectIdentifier(next)] = Node(next.val)
                }
                newNode?.next = map[ObjectIdentifier(next)]
            }
            curr = curr?.next
        }
        return result;
    }
}

