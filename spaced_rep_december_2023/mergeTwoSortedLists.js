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
// Linked List traversal
// Time: O(n + m)
// Space: O(1)...output doesn't count
var mergeTwoLists = function(list1, list2) {
    let newHead = null, curr = null;
    
    while (list1 || list2) {
        let v1 = list1 ? list1 : {val: Infinity}
        let v2 = list2 ? list2 : {val: Infinity}
        let temp = null;
        if (v1.val <= v2.val) {
            temp = v1;
            list1 = list1.next;
        } else {
            temp = v2;
            list2 = list2.next;
        }
        if (curr) {
            curr.next = temp;
        }
        curr = temp;
        if (!newHead) newHead = curr;
        if (!list1 && list2) {
            curr.next = list2
            break;
        } else if (list1 && !list2) {
            curr.next = list1;
            break;
        }
    }
    return newHead;
};

console.log(mergeTwoLists())