// Stack
// Time and Space: O(n)...for nodes in linked list
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let stack = [], curr = head;
    while (curr) {
        stack.push(curr);
        curr = curr.next;
    }
    k %= stack.length;
    if (k === 0) return head;
    while (k > 0) {
        k -= 1;
        let node = stack.pop();
        let tail = stack[stack.length-1];
        let prevHead = stack[0];
        if (tail) tail.next = null;
        if (prevHead) {
            node.next = prevHead;
            stack.unshift(node)
        }
        curr = node;
    }
    return curr;
};
console.log(rotateRight([1,2,3,4,5], 2)) //= [4,5,1,2,3]
