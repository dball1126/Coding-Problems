var reverseList = function(n) {
    let curr = n, prev = null
    while (curr) {
        let next = curr.next
        let temp = curr;
        curr.next = prev;
        prev = temp;
        curr = next;
    }
    return prev;
};