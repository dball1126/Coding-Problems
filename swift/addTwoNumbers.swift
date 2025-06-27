// /**
//  * Definition for singly-linked list.
//  * public class ListNode {
//  *     public var val: Int
//  *     public var next: ListNode?
//  *     public init() { self.val = 0; self.next = nil; }
//  *     public init(_ val: Int) { self.val = val; self.next = nil; }
//  *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
//  * }
//  */
// public class ListNode {
//     public var val: Int
//     public var next: ListNode?
//     public init() { self.val; self.next = nil; }
//     public init(_ val: Int) { self.val = val; self.next = nil; }
//     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next;}

// }

// class Solution {
//     func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
//         var carry = 0
//         var result: ListNode?
//         var curr: ListNode?
//         var n1 = l1
//         var n2 = l2

//         while (n1 != nil || n2 != nil) {
//             if var item1 = n1 {
//                 carry += item1.val
//                 n1 = item1.next
//             }
//             if var item2 = n2 {
//                 carry += item2.val
//                 n2 = item2.next
//             }


//             let node = ListNode(carry % 10)
//             carry /= 10
//             curr?.next = node
//             curr = node
//             if result == nil {
//                 result = curr
//             }
//         }

//         // if carry > 0 {
//         //     curr.next = ListNode(carry)
//         // }
        
//         return result
//     }
// }

