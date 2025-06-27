
// Definition for a Node.
function Node(val, next) {
    this.val = val;
    this.next = next;
};


/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (!head) {
        let nde = new Node(insertVal, null)
        nde.next = nde;
        return nde;
    }
    // find head
    let minHead, curr = head, stack = [], map = new Map()
    while (curr) {
        if (map.has(curr)) break
        if (!minHead){
            minHead = curr;
        } else {
            if (curr.val < minHead.val) minHead = curr
        }
        stack.push(curr)
        
        map.set(curr, stack.length-1)
        curr = curr.next;
    }
    let node = new Node(insertVal, null)
    let visited = new Set();
    
    while (minHead && minHead.val >= insertVal) {
        if (visited.has(minHead)) break;
        minHead = minHead.next;
        visited.add(minHead)
    }
    let idx = map.get(minHead)
    temp = stack[idx].next
    stack[idx].next = node

    node.next = temp
    return head;
};