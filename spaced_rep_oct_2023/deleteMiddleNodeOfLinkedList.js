

// Stack
// Time and Space: O(n)
var deleteMiddle = function(head) {
    let stack = [], curr = head;
    
    while (curr) {
        stack.push(curr)
        curr = curr.next;
    }

    let m = Math.floor(stack.length/2)
    if (m === 0) return null
    let prev = stack[m-1]
    prev.next = stack[m].next
    return stack[0]
};