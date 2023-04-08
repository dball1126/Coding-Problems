/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    let newHead = new ListNode(head.val)

    while (head.next) {
        let prev = {...newHead};
        newHead = new ListNode(head.next.val, prev);
        head = head.next;
    }
    return newHead;
};

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
node1.next = node2;
node2.next = node3;

console.log(reverseList(node1))

/**
 *  1 - > 2 - > 3
 * 
 *  1 
 *  prev = 1
 * new Head = 2
 * 2 - > 1
 * 
 * 
 * prev = 2 - > 1
 * 3 - > 2 - > 1
 * 
 */