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
var insert = function(head, insertVal) {    
    let curr = head;
    let nde = new Node(insertVal)
    
    if (!head){
        nde.next = nde;
        return nde;
    }

    while (curr.next !== head) {

        if (curr.next.val < curr.val && (insertVal >= curr.val || insertVal <= curr.next.val)) {
            break;
        } else if (insertVal >= curr.val && insertVal <= curr.next.val) {
            break;
        }
        curr = curr.next;
    }

    let temp = curr.next;
    curr.next = nde;
    nde.next = temp;
    return head;
};
/**
 * [1,3,5]  4
 * 
 * 1
 */