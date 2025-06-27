/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Rerverse in-place Linked List Traversal
// Two-pointer
// Time: O(n)
// Space: O(1)
var isPalindrome = function(head) {
    let tail = head;
    head.prev = null
    while (tail && tail.next !== null) {
        let temp = tail
        tail = tail.next;
        tail.prev = temp;
    }

    while (head && tail) {
        if (head.val !== tail.val) return false;
        head = head.next;
        tail = tail.prev
    }

    return true;
};

