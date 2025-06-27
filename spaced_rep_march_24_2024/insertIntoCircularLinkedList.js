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
// Space: O1
var insert = function(head, insertVal) {
    let nde = new Node(insertVal)
    if (!head) {
        nde.next = nde;
        return nde;
    }   
    let curr = head

    while (curr.next !== head) {


        if (curr.val >= insertVal && insertVal <=curr.next.val && curr.val <= curr.next.val ) {
            // found curr
            break
        } else if ((curr.val > curr.next.val) && (insertVal >= curr.val || insertVal <= curr.next.val)) {
            break;
        }

        curr = curr.next;
    }
    let temp = curr.next;
    curr.next = nde;
    nde.next = temp;

    return head;
};