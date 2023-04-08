/**
 * Left, Right, Root
 */
 var postorderTraversal = function(root) {
    if (!root) return []
    let curr = root, stack = [], result = []

    while (curr || stack.length) {
        while(curr && curr.left) {
            stack.push(curr)
            curr = curr.left
        }
        
    }
};