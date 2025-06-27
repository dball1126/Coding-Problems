/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
// Iterative Inorder Traversal (Left, Root, Right)
// Time & Space: O(n)
var treeToDoublyList = function(root) {
    if (!root) return root
    let stack = [], head = null, prev = null
    while (stack.length || root) {
        while (root && root.left) {
            stack.push(root)
            root = root.left
        }
        if (!root) root = stack.pop()
        
        if (!head) {
            head = root;
            prev = root
        } else {
            prev.right = root;
            root.left = prev
            prev = root
        }
        if (root.right) {
            root = root.right
        } else { root = null }
    }
    head.left = prev;
    prev.right = head
    return head;
};

