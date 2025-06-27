/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */

public class ListNode {
    public var val: Int
    public var next: ListNode?
    public init() { self.val = 0; self.next = nil;}
    public init(_ val: Int) {self.val = 0; self.next = nil}
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; } 
}

class Solution {
    func reverseList(_ head: ListNode?) -> ListNode? {
        var prev: ListNode?
        var curr: ListNode? = head

        while var node = curr {
            var next: ListNode? = node.next
            node.next = prev
            prev = node
            curr = next
        }
        return prev
    }
}