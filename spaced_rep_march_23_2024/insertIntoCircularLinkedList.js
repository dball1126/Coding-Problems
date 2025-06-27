
// Definition for a Node.
function Node(val, next) {
    this.val = val;
    this.next = next;
};

// Linked List Traversal
// Time: O(n)
// Space: O(1)
var insert = function(head, insertVal) {
    let nde = new Node(insertVal)
    if (!head) {
        nde.next = nde;
        return nde;
    }
    let curr = head, prev = null;
    while (curr && curr.next !== head) {
        if (insertVal >= curr.val && insertVal <= curr.next.val) {
            let temp = curr.next;
            curr.next = nde;
            nde.next = temp;
            return head;
        }
        prev = curr;
        curr = curr.next;
    }

    let nxtemp = curr.next
    if (prev && insertVal < curr.val && curr.next) {
        prev.next = nde
        nde.next = curr;
        return head;
    }
    curr.next = nde;
    nde.next = nxtemp;

    return head;
};
