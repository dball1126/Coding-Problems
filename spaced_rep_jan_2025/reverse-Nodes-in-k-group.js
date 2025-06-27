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
    constructor(val) {
        this.val = val; this.next = null;
    }
}
var reverseKGroup = function(head, k) {
    if (k === 1) return head;
    let newHead = new Node();
    newHead.next = head;
    let curr = newHead, c = 0;

    const reverse = () => {
        let v = 0;
        let prev = null;
        let newHead = curr.next;
        while (v < k) {
            v++;
            let temp = newHead.next;
            newHead.next = prev;
            prev = newHead;
            newHead = temp;
        }
        curr.next = prev;
    }

    while (c < k && head) {
        let nx = head.next;
        c++;
        if (c === k) {
            let tail = curr.next;
            reverse();
            tail.next = nx;
            curr = tail;
            head = nx;
            c = 0;
        } else {
            head = head.next;
        }
    }
    return newHead.next;
};