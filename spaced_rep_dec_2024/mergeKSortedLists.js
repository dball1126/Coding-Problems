

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// Merge Lists
// Time: O(n * log(k))...n is the number of elements, and k is the number of lists
var mergeKLists = function(lists) {
    if (!lists.length) return null;
    
    while (lists.length > 1) {
        for (let i = 0; i < Math.floor(lists.length / 2); i++ ) { // divide and conquer
            lists[i] = mergeList(lists[i], lists.pop());
        }
    }
    return lists[0]
};

const mergeList = (list1, list2) => {
    let newList, curr;

    while (list1 || list2) {
        let v1 = list1 ? list1.val : Infinity;
        let v2 = list2 ? list2.val : Infinity;
        let val;
        if (v1 <= v2) {
            val = v1;
            list1 = list1.next;
        } else {
            val = v2;
            list2 = list2.next;
        }
        let node = new ListNode(val);
        if (!newList) {
            newList = node;
            curr = node;
        } else {
            curr.next = node;
            curr = node;
        }
    }

    return newList;
}