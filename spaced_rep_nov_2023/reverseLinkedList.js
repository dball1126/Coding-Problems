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
var reverseList = function(head) {
    
    let prev = null, curr = head;

    while (curr) {
        if (prev) prev.next = curr
        prev = curr;
        curr = curr.next;
    }
    return prev;
};