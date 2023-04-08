// Remove the nth node from the End of a Linked List
// Time & Space: O(n)
var removeNthFromEnd = function(head, n) {
    if (!head) return head;
    if (n === 1 && !head.next) return null;
    let curr = head, prev = null, position = 1, order = new Map();

    while (curr) {
        let temp = curr.next
        order.set(position, curr)
        curr = temp
        position++
    }
    position = order.size - n + 1
    if (n === 1) { // handle end removal
        prev = order.get(order.size-1)
        prev.next = prev.next.next
        return head
    }
    if (position === 1) return order.get(2) // handle beginning removal
    prev = order.get(position-1) 
    next = order.get(position+1)
    prev.next = next // handle normal removal
    return head;
};

console.log(removeNthFromEnd(node1, 3))