var reverseList = function(node) {
    if (!node || !node.next) return node;
    let curr = node, prev = null
    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp;
    }
    return prev
};