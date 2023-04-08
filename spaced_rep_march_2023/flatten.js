/** DFS
 * Preorder: root, left, right
 * Time and Space: O(n)...nodes
 */
var flatten = function(root) {
    if (!root) return root
    let curr = root, newRoot = null, stack = []   
    while (curr || stack.length) {
        if (!curr) curr = stack.pop();
        let tempLeft = curr.left, tempRight = curr.right;
        curr.left = null;
        if (!newRoot){
            newRoot = curr;
        } else {
            newRoot.right = curr;
            newRoot = curr;
        }
        if (tempRight) stack.push(tempRight)
        curr = tempLeft
    }
    return root;
};
