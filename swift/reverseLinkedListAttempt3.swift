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
    public init() { self.val = 0; self.next = nil; }
    public init(_ val: Int) { self.val = val; self.next = nil }
    public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; } 
 }
class Solution {
    func reverseList(_ head: ListNode?) -> ListNode? {
        var node = head;
        var prev: ListNode? = nil

        while node != nil {
            if var curr: ListNode = node {
                var next: ListNode? = curr.next
                curr.next = prev;
                prev = curr;
                node = next;
            }
        }
        return prev
    }
}