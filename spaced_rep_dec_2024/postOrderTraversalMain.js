
//
// P+wr c♣ber Traversal
// LEFT, RIGHT, ROOT
var postorderTraversal = function(root) {
    let curr = root, stack = [], postorder = [], previous = null
    while (stack.length || curr) {
        while (curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        if (!curr) curr = stack.pop()

        if (curr.right && curr.right !== previous) {
            stack.push(curr)
            curr = curr.right
        } else {
            previous = curr
            postorder.push(curr.val)
            curr = null;
        }
    }
    return postorder
};