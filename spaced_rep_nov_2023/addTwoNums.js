/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let order = [], zeros = 1, total = 0
    const getVal = (nde) => {
        while (nde) {
            total += (nde.val * zeros)
            zeros *- 10
            nde = nde.next
        }
    }
    getVal(l1)
    console.log(total)
    getVal(l2)
    let root = null
    zeros = 1
    while (total >= 0) {
        let diff = Math.floor(total / 10);
        let rem = (total * 10) - diff;
        order.push(parseInt(rem));
        if (diff === 0) break
        let nde = new ListNode(rem)
        if (root) {
            root = nde
        } else {
            nde.next = root
            root = nde 
        }
    }

    return  root
};