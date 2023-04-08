
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }

function Node(val, next = undefined) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null;
    if (!list1 && list2) return list2 
    if (list1 && !list2) return list1;
    let head = null;

    while (list1 || list2) {
        if 
    }

    return head;
};


// l1 = [1,2,4], l2 = [1,3,4]
let node1 = new Node(1)
let node2 = new Node(1)
let node3 = new Node(2)
let node4 = new Node(3)
let node5 = new Node(4)
let node6 = new Node(4)

node1.next = node3
node3.next = node5

node2.next = node4
node4.next = node6
let result = mergeTwoLists(node1, node2)
console.log(result)
// console.log(result.next.next)
// console.log(result.next.next.next)
// console.log(result.next.next.next.next)
