// Time: O(n); Space: O(1)
var reverseList = function(root) {
    if (!root) return root;
    let curr = root, prev = null
    while (curr) {
        if (!prev) {
            prev = curr;
            curr = curr.next;
            prev.next = null;
        } else {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
    }
    return prev;
};
