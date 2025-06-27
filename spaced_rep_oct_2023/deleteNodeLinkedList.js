




/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// Linked List traversal
// Time: O(n)
// Space: O(1)
var deleteNode = function(node) {
    let curr = node;

    while (curr && curr.next && curr.next.next) {
        curr.val = curr.next.val;
        curr = curr.next;
    }
    curr.val = curr.next.val;
    curr.next = null;
};
