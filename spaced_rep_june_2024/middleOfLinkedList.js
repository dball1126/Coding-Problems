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
// Stack and Linked List Traversal
// Time and Space: O(n)
var middleNode = function(head) {
    
    const stack = []
    while (head) {
        stack.push(head)
        head = head.next;
    }
    if (stack.length % 2 === 0) {
        return stack[(stack.length / 2)]
    } else {
        return stack[Math.floor(stack.length / 2)]
    } 
};

