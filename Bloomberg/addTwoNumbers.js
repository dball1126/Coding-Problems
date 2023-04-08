/**
 * get the sum individually from each linked list.
 * split, parse int and turn into a linked list
 * 
 * Time: O(n)
 * Space: O(n) for only one of the linked lists
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/********
 * Special Note: This algorithm works but the number can be too big so it fails 1 or 2 test cases.
 */

var addTwoNumbers = function(l1, l2) {
    let [sum1, sum2, head, curr] = ["","", null, null]
    while (l1) {
        sum1 = l1.val + sum1; 
        l1 = l1.next;
    } 
    while (l2) {
        sum2 = l2.val + sum2; 
        l2 = l2.next;
    }
    
    let num1 = parseInt(sum1)
    let num2 = parseInt(sum2)
    let arr = [num1+ num2]
    arr.toString().split("").reverse().forEach(v => {
        if (!curr) {
            curr = new ListNode(parseInt(v))
            head = Object.assign(curr)
        } else {
            curr.next = new ListNode(parseInt(v))
            curr = curr.next;
        }
    })

    return head;
};

const node1 = new ListNode(2)
const node2 = new ListNode(4)
const node3 = new ListNode(3)

const node4 = new ListNode(5)
const node5 = new ListNode(6)
const node6 = new ListNode(4)

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6

console.log(addTwoNumbers(node1, node4))