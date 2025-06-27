/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
class Node {
    constructor(val = null) {
        this.next = null;
        this.val = val;
    }
}
var reverseKGroup = function(head, k) {
  
    let newHead = new Node(), count = 0, prev;

    while (head) {
        if (count === k) {
            let newNext = head.next;
            let tail = prev.next;
            let oldHead = head;
            let newPrev = reverseNodes(prev.next)
            prev.next = newPrev;
        }
    }

    
    const reverseNodes = (nde, tgt) => {
        let prev = null;
        while (nde !== tgt) {
            let temp = nde.next;
            nde.next = prev;
            prev = nde;
            nde = temp;
        }
        return prev;
    }
    return newHead.next;
};