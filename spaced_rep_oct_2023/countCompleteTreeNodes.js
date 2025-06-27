// Iterative Depth-First-Search
// Time and Space: O(n)
var countNodes = function(root) {
    if (!root) return 0;
    let stack = [root], max = 0
    
    while (stack.length) {
        let nde = stack.pop();
        max+=1

        if (nde.left) stack.push(nde.left)
        if (nde.right) stack.push(nde.right)
    }
    return max
};

