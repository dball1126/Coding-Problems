/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Time: O(n)
// Space: O(1)...if we don't count the output
var reverseList = function(head) {
    let prev = null, curr = head;

    while (curr) {
        let temp = curr.next;
        if (!prev) {
            curr.next = null;
            prev = curr;
        } else {
            curr.next = prev
            prev = curr;
        }
        curr = temp
    }
    return prev;
};
