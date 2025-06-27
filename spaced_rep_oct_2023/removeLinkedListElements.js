/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// Time: O(n)
var removeElements = function(head, val) {

    let newHead = null, curr = head;
    while (curr && curr.val === val) {
        curr = curr.next
    }
    newHead = curr;

    while (curr) {
        if (curr.next && curr.next.val === val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return newHead;
};