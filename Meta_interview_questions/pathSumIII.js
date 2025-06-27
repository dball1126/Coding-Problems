/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;

    const dfs = (nde) => {
        if (!nde) return new Map()
        
        let leftSums = dfs(nde.left), rightSums = dfs(nde.right)
        if (nde.val === targetSum) count++
        const prefixSums = new Map()

        for (let [k, v] of rightSums) { // merge prefix sums
            if (!leftSums.has(k)) {
                leftSums.set(k, v)
            } else {
                leftSums.set(k, leftSums.get(k) + v)
            }
        }

        for (let [k, v] of leftSums) {
            let sum = v + nde.val
            if (sum === targetSum) { // update count 
                count++
            } else if (leftSums.has(targetSum - sum)) {
                count += (leftSums.get(targetSum - sum))
            }

            if (!prefixSums.has(k)) { // update existing prefix sums
                prefixSums.set(k, v)
            } else {
                prefixSums.set(k, prefixSums.get(k) + v)
            }

            if (!prefixSums.has(sum)) { // update new prefix sums
                prefixSums.set(sum, 1)
            } else {
                prefixSums.set(sum, prefixSums.get(sum) + 1)
            }
        }

        prefixSums.set(nde.val, 1)

        return prefixSums
    }
    dfs(root)
    return count;
};