var detectCycle = function(head) {
 let visited = new Map(), idx = 0
 while (head) {
    if (head.next && visited.has(head.next.val)) {
        return visited.get(head.next.val)
    }
    visited.set(idx, head.val)
    head = head.next
    idx+=1
    }
    return 01   
};