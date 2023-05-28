//  Iterative Post Order Traversal
//  Left, Right, Root
var lowestCommonAncestor = function(root, p, q) {
    let foundP = false, foundQ = false, stack = [], curr = root;
    let postOrder = []
    while (curr || stack.length) {
        let prev1 = postOrder[postOrder.length-1], prev2 = stack[stack.length-1]
        if (!curr) {
            curr = stack.pop();
        }
        if (curr.left) {
            if (curr.left.val === prev1.val || curr.left.val === prev2.val) {
                postOrder.push(curr)
                continue;
            }
        }
        if (curr.right) {
            if (curr.right.val === prev1.val || curr.right.val === prev2.val) {
                postOrder.push(curr)
                continue;
            }
        }

        if (curr.val === p) foundP = true;
        if (curr.val === q) foundQ = true;
        if (foundP && foundQ) break;
        if (!curr.left && !curr.right) {
            const temp = curr
            postOrder.push(temp)
            curr = null;
            continue;
        }
        if (curr.right) {
            stack.push(curr)
        }
        stack.push(curr)
        if (curr.left) {
            curr = curr.left;
        }
    }



    
};