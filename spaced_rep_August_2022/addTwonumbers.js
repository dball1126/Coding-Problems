function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * Time: O(max(m, n)) for l1 and l2
 * Space: O(max(n, m) + 1) for output list
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0, root = null, curr = null;
    while (l1 || l2) {
        let sum = carry, node = null;
        carry = 0
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        if (sum < 10) {
            node = new ListNode(sum)
        } else {
            node = new ListNode(sum % 10)
            carry = 1
        }

        if (!root) {
            root = node;
            curr = node;
        } else {
            curr.next = node
            curr = node;
        }
    }
    if (carry) {
        node = new ListNode(carry)
        curr.next = node
    }
    return root
};