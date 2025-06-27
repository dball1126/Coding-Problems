/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
// Linked List Traversal
// Time: O(n)
// Space: O(1)
var insert = function(head, insertVal) {
    let nde = new Node(insertVal)
    if (!head) {
        nde.next = nde;
        return nde;
    }
    let curr = head;

    const setNode = () => {
        let temp = curr.next;
        curr.next = nde;
        nde.next = temp;
        return head;
    }

    while (curr && curr.next !== head) {

        if (curr.val <= insertVal && curr.next.val <= insertVal) {

        } else if (curr.next.val < curr.val && (insertVal <= curr.next.val || ))
         curr = curr.next;
    }

    return setNode()
};

/**
 * [3,5,1]  5
 * 3 55 1
 */