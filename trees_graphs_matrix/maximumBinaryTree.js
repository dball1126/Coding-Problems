function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// Divide and Conquer
// Time: O(n^2) (worst case)...O(n * log(n))(average)
// Space: O(n) (worse case)...O(log(n))(average)
var constructMaximumBinaryTree = function(nums) {
    const divideAndConquer = (l, r) => {
        if (nums[l] === undefined || l > r) return null;
        let max = -Infinity, maxIdx
        for (let i = l; i <= r; i++) {    
            if (nums[i] > max) {
                max = nums[i]
                maxIdx = i;
            }
        }
        let node = new TreeNode(nums[maxIdx])
        node.left = divideAndConquer(l, maxIdx-1)
        node.right = divideAndConquer(maxIdx + 1, r)
        return node;
    }
    return divideAndConquer(0, nums.length-1);
};