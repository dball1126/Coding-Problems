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
    public init(_ val: Int) { self.val = val; self.next = nil; }
 }
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var result: ListNode?
        var curr: ListNode?
        var h1 = l1, h2 = l2
        var carry: Int = 0
        while (h1 != nil || h2 != nil) {
            if var node1 = h1 { 
                carry += node1.val
                h1 = node1.next
            }
            if var node2 = h2 { 
                carry += node2.val
                h2 = node2.next
            }
            var newNode = ListNode(carry % 10)
            if result == nil {
                result = newNode
            }
            if var current = curr {
                current.next = newNode
            }
            curr = newNode
            if h1 == nil && h2 == nil && (carry / 10 > 0) {
                if var finalCurr = curr {
                    finalCurr.next = ListNode(carry)
                }
            }
            carry  /= 10
        }
        return result
    }
}