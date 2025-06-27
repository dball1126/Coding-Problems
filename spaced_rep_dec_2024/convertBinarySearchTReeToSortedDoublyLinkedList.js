
function _Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};
 
/**
 * @param {_Node} root
 * @return {_Node}
 */
// Inorder Traversal: LEFT, ROOT, RIGHT
// Time and Space: O(n)
var treeToDoublyList = function(root) {
    if (!root) return null;
    let stack = [], curr = root, head, prev;

    while (stack.length || curr) {
        while (curr && curr.left) {
            stack.push(curr);
            curr = curr.left;
        }
        if (!curr) curr = stack.pop();

        if (!head) {
            head = curr;
        } else {
            prev.right = curr;
            curr.left = prev;
        }
        prev = curr;
        curr = curr.right;
    }
    head.left = prev;
    prev.right = head;
    return head;
};