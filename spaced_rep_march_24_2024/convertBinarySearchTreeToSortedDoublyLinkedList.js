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
// InOrder Traversal
// Time and Space: O(n)
var treeToDoublyList = function(root) {
    if (!root) return []
    const inorder = []

    const inOrderDfs = (nde) => { // O(n)
        if (!nde) return []
        return [...inOrderDfs(nde.left), nde, ...inOrderDfs(nde.right)]
    }

    for (let i = 0; i < inorder.length; i++) { // O(n)
        let next = i+1 < inorder.length ? inorder[i+1] : inorder[0]
        let prev = i-1 >= 0 ? inorder[i-1] : inorder[inorder.length-1]
        let curr = inorder[i]
        curr.left = prev;
        curr.right = next;
    }
    return inorder[0]
};

/**
 * 
   [1 3 4]
   i = 0
   next = [3], prev = [4]
   curr.prev = 4, curr.next = 3

     i = 1   next = [4],  prev = [1]
    curr.left = [1], curr.right = [4]

    i = 2
    curr = [4]  prev = [3]  next [1]
    curr.right = [1]
    curr.left = [3]

 * 
 */