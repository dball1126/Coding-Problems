/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Linked List Traversal
// Time: O(n)
// Space: O(1)
var hasCycle = function(head) {
    if (!head) return false
    let tortoise = head, hare = head.next
    while (tortoise || hare) {
        if (!tortoise || !hare) return false
        if (tortoise === hare) return true;
        if (tortoise) tortoise = tortoise.next;
        if (hare) {
            hare = hare.next;
            if (hare) hare = hare.next
        }
    }
    return false;
};

