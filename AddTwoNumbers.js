function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let sum = [];

    while (l1 || l2) {
        let l1Val = l1 === null ? 0 : l1.val;
        let l2Val = l2 === null ? 0 : l2.val;
        let newSum = l1Val + l2Val + carry;
        // console.log(l1Val)
        // console.log(l2Val)
        if (newSum >= 10) {
            
            sum[0] = sum.length === 0 ? 1 : sum[0] += 1;
            console.log(sum)
            console.log(carry)
            carry = newSum % 10;
            sum.unshift(0);
        } else {
            sum.unshift(newSum + carry)
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return sum;
};


let node1 = new ListNode(9, null);
let node2 = new ListNode(9, node1);
let node3 = new ListNode(9, node2);
let node4 = new ListNode(9, node3);
let node5 = new ListNode(9, node4);
let node6 = new ListNode(9, node5);
let node7 = new ListNode(9, node6);

let node11 = new ListNode(9, null);
let node12 = new ListNode(9, node11);
let node13 = new ListNode(9, node12);
let node14 = new ListNode(9, node13);


console.log(addTwoNumbers(node7, node14));