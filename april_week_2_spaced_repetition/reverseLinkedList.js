function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
    let [prev, curr] = [null, head];
    
    while (curr) {
        let temp = curr;
        curr = curr.next;
        temp.next = prev;
        prev = temp;
    }
    return prev;
};

console.log(reverseList(1))