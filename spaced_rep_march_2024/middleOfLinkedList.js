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
// Linked List Traversal // stack/array
// Time: O(n)
// Space: O(n)
var middleNode = function(head) {
    const stack = []
    while (head) {
        stack.push(head)
        head = head.next
    }

    if (stack.length & 1) {
        return stack[Math.floor(stack.length/2)]
    } else {
        return stack[stack.length/2]
    }
};
