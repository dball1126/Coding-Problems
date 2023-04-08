/**
 * Inorder traversal:
 * Time and Space: O(n)
 */
 var increasingBST = function(root) {
    let head = null, newRoot = null, curr = root, stack = [];
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left
        }
        if (!curr) curr = stack.pop();
        if (!head) {
            head = curr;
            newRoot = head;
        } else {
            head.right = curr;
            curr.left = null;
            head = curr;
        }
        curr = curr.right;
    }
    return newRoot;
 };