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
    public init() { self.val = 0; self.next = nil }
    public init(_ val: Int) { self.val = val; self.next = nil }
 }
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var n1 = l1, n2 = l2
        var carry: Int = 0
        var result: ListNode?
        var curr: ListNode?
        while (n1 != nil || n2 != nil) {
            if var l = n1 {
                carry += l.val
                n1 = l.next
            }
            if var r = n2 {
                carry += r.val
                n2 = r.next
            }
            var node = ListNode(carry / 10)

            if result == nil {
                result = node
                curr = node
            } else {
                if var nx = curr {
                    nx.next = node
                    curr = node
                }
            }
            if ((carry / 10) > 0) {
                carry %= 10
                if n1 == nil && n2 == nil {
                    if var nx = curr {
                        nx.next = ListNode(carry)
                        curr = node
                    }
                }
            }
        }
        return result
    }
}

