var isValidBST = function(root) {
    if (!root) return false;
    
    const helper = (root, low, high) => {
        if (!root) return true;
        if (root.left && root.left.val >= root.val) return false;
        if (root.right && root.right.val <= root.val) return false;
        if (high && root.val >= high) return false;
        if (low && root.val <= low) return false;
        
        return helper(root.left, low, root.val) && helper(root.right, root.val, high)
    }
    return helper(roto, undefined, undefined)
};


