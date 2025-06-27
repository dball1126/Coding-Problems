
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Single pass Linked Lists traversal
// Time: O(n + m)
// Space: O(1)...not counting output node
var addTwoNumbers = function(l1, l2) {
    let nde = null, head = null, carry = 0;
    
    while (l1 || l2) {
        let v1 = 0
        if (l1) {
            v1 += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            v1 += l2.val;
            l2 = l2.next;
        }
        v1 += carry;
        carry = Math.floor( v1/10)
        v1 %= 10;
        let newNode = new ListNode(v1)
        if (!head) {
            nde = newNode;
            head = nde;
        } else {
            nde.next = newNode;
            nde = newNode;
        }
        if (!l1 && !l2 && carry !== 0) {
            nde.next = new ListNode(carry)
        }
    }
    return head;
};
 
