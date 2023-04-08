//
var lowestCommonAncestor = function(root, p, q) {
    let lca = null, pFound, qFound, stack = [root, 0], order = []
    
    while (stack.length) {
        let next = stack.pop();
        let node = next[0], status = next[1]
        if (!node) return false;
        
        let curr = node.val === p.val || node.val === q.val;

        if (curr) status += 1


        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) stack.push(node.right)
        
        if (curr && left || curr && right || left && right) {
            if (!lca) lca = node;
        }
        
        return curr || left || right;
    }
    
   
    return lca;
};