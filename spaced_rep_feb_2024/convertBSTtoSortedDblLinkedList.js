/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// iterative preorder traversal
// root, left, right
// Time and Space: O(n)
var treeToDoublyList = function(root) {
    if (!root) return root;
    let curr = root, stack = [], preorder = []

    while (curr || stack.length) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();
        preorder.push(curr)
        curr = curr.right
    }


    for (let i = 0; i < preorder.length; i++) {
        let prev = i-1 < 0 ? preorder.length-1 : i-1
        let next = i+1 > preorder.length-1 ? 0 : i+1
        let nde = preorder[i]
        nde.left = preorder[prev];
        nde.right = preorder[next];
    }
    return preorder[0]
};

//