
// Recursive Depth-First-Search
// Time and Space: O(n)
var longestUnivaluePath = function(root) {
    let max = 0;
    const dfs = (nde) => {
        if (!nde || (!nde.left && !nde.right)) return 0;
        
        let left = dfs(nde.left), right = dfs(nde.right), returnVal = 0;

        if (nde.left) {
            if (nde.left.val === nde.val) {
                max = Math.max(max, left + 1)
                returnVal = Math.max(returnVal, left + 1)
            }
        }
        if (nde.right) {
            if (nde.right.val === nde.val) {
                max = Math.max(max, right + 1)
                returnVal = Math.max(returnVal, right + 1)
            }
        }

        if (nde.left && nde.right && nde.val === nde.left.val && nde.val === nde.right.val) {
            max = Math.max(max, left + 1 + right + 1)
        }
        return returnVal
    }
    dfs(root)
    return max;
};



