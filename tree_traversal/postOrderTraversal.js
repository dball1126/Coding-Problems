/** left, right, root
 * DFS (n) 
 * Time O(n), Space: O(1)
 */
var postorderTraversal = function(root) {
    let result = [], stack = [], curr = root

    while (curr || stack.length) {
        let currRoot = curr;
        while (curr.right) {
            stack.push(curr)
            curr = curr.right
        }
        while (curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        result.push(curr.val)
        curr = stack.pop();
    }
    return result;
};