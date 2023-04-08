/**
 * DFS, iterative preorder: root, left, right
 * Time and Space: O(n)
 */

var flatten = function(root) {
    if (!root) return root;
    let newRoot, currRoot;
    let curr = root, stack = []

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();

        if (curr && curr.right) {
            stack.push(curr.right)
        }
        if (curr && curr.left) {
            stack.push(curr.left)
        }

        curr.left = null;
        if (!newRoot) {
            newRoot = curr;
            currRoot = curr;
        } else {
            currRoot.right = curr;
            currRoot = curr;
        }
        curr = null;
    }    
    return newRoot;
};