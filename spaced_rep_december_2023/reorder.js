// Two-pointer technique
// Time and Space: O(n)
var reorderList = function(root) {
    let head = null, queue = []
    while (root) {
        queue.push(root)
        root = root.next
    }
    let s = 0, e = queue.length-1
    while (s <= e) {
        if (s === e) {
            if (head) head.next  = queue[s]
            queue[s].next = null
            break;
        }

        if (!head) {
            head = queue[s]
        } else {
            head.next = queue[s]
        }

        queue[s].next = queue[e]
        queue[e].next = null;
        head = queue[e]
        s+=1; e--;
    }
    return queue[0]
};


// [1, 2, 3]
// [1, 3]
// 