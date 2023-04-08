/**
 * Preorder to linked list. 
 * root, left, right
 * Time O(n), Space O(1)
 */
var flatten = function(root) {
    if (!root) return root;
    let curr = null, stack = [root]
    while (stack.length) {
        let temp = stack.pop();
        if (temp.right) stack.push(temp.right)
        if (temp.left) stack.push(temp.left)
        temp.left = null;
        if (!curr) {
            curr = temp;
        } else {
            curr.right = temp;
            curr = temp;
        }
    }
};