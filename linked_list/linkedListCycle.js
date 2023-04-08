// Time: O(n^2 worst)
// Space: O(n)
var hasCycle = function(head) {
    const set = new Map();
    while (head) {
        let val = head.val, temp = head
        if (set.has(val) && head.next) {
            let arr = set.get(val)
            for (let i = 0; i < arr.length; i++) {
                if (head.next == arr[i]) return true
            }
        ;}
        if (!set.has(val)) set.set(val, [])
        set.get(val).push(temp);
        head = head.next;
    }
    return false;
};