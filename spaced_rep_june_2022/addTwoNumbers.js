
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * Time O(n) for nodes in longest list
 * Space: O(n + 1)  = O(n) ...1 extra bit for adding two numbers
 */
 var addTwoNumbers = function(a, b) {
    let v1, v2, sum, root, curr, carry = 0

    while (a || b) {
        v1 = a ? a.val : 0
        v2 = b ? b.val : 0
        sum = v1 + v2 + carry
        let newCarry = sum % 10
        if (sum < 10) newCarry =  sum
        let node = new ListNode(newCarry)

        if (!root) {
            root = node
            curr = node
        } else {
            curr.next = node
            curr = node
        }
        if (a) a = a.next
        if (b) b = b.next
        carry = Math.floor(sum / 10)
        if (!a && !b && carry !== 0) curr.next = new ListNode(carry)
    }
    return root
};



// a1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// a2 = [5,6,4]

// +a1.reverse().join("") + +a2.reverse().join("")