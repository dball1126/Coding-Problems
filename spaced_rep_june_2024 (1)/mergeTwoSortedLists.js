/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Linked Lists Traversal
// Time O(n + m), n for length of list1 and m for length of list2
// Space: O(1) not counting output var
var mergeTwoLists = function(list1, list2) {
    let head = null, curr= null

    while (list1 || list2) {
        let v1 = Infinity, v2 = Infinity
        if (list1) v1 = list1.val;
        if (list2) v2 = list2.val;
        let tgt = Infinity
        if (v1 <= v2) {
            tgt = list1;
            list1 = list1.next
        } else {
            tgt = list2
            list2 = list2.next
        }

        if (!head) {
            head = tgt
            curr = tgt
        } else {
            curr.next =tgt;
            curr = tgt;
        }
    }
    return head;
};

