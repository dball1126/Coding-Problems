// Stack
// Time and Space: O(n)
var reorderList = function(head) {
    let stack = [], curr = head;
    while (curr) {
        stack.push(curr)
        curr = curr.next
    }
    curr = stack.shift();
    
    while (stack.length) {
        let first = stack.pop();
        let second = stack.shift();
        first.next = null;
        curr.next = first;
        curr = first;
        if (second !== undefined) {
            second.next = null;
            curr.next = second;
            curr = second;
        }
    }
    return head;
};
¢