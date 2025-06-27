/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// Linked List traveral, elementary math
// Time: O(n + m)
// Space: O(1)...not counting ouput result
var addTwoNumbers = function(l1, l2) {
    let head, curr, carry = 0

    while (l1 || l2) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        let digit = val % 10;
        carry = Math.floor(val / 10);
        let nde = new ListNode(digit)
        if (!head) {
            head = nde;
            curr = nde;
        } else {
            curr.next = nde
            curr = nde
        }
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
        if (!l1 && !l2 & carry > 0) {
            curr.next = new ListNode(carry)
        }
    }
    return head;
};

