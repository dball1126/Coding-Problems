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
// Linked List Traversal.
// Time: O(n)
// Space: O(1)
var reverseList = function(head) {
    let prev = null;

    while (head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    return prev;
};

