var reverseList = function(n) {
    let prev = n;
    while (n.next) {
        let temp = n.next;
        temp.next = prev;
        prev = temp
        n = n.next;
    }
    return prev;
}