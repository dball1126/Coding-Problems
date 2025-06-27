/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Recursive Depth-First-Search with Binary Search
// Time & Space: Worst case: O(n)
//             Average case: log(n)
var lowestCommonAncestor = function(root, p, q) {
    let pNode = null, qNode = null, result = null;

    const dfs = (nde) => {
        if (result || !nde) return false;
        
        if (root.val === p.val) {
            pNode = nde;
        } else if (root.val === q.val) {
            qNode = nde;
        }
        if (pNode && qNode) return true;
        let left = null, right = null, val = nde.val === q.val || nde.val === p.val

        if ((nde.val > p.val && !pNode) || (nde.val > q.val && !qNode)) {
            left = dfs(nde.left)
        }

        if ((nde.val < p.val && !pNode) || (nde.val < q.val && !qNode)) {
            right = dfs(nde.right)
        }

        if (!result) {
            if (val && left || left && right || val && right) {
                result = nde
                return false;
            }
        }
        return val || left || right
    }
    dfs(root)
    return result;
};

