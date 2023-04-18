// Iterative Depth-First-Search
// Time and Space: O(n)
var isValidBST = function(root) {
    if (!root) return true;
    
    let stack = [[root, Infinity, -Infinity]]

    while (stack.length) {
        let [node, max, min]  = stack.pop();
        if (node.val >= max || node.val <= min) return false;
        if (node.left) stack.push([node.left, node.val, min])
        if (node.right) stack.push([node.right, max, node.val])
    } 
    return true;
};
