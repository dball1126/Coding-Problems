class Data {
    constructor(sum, paths) {
        this.paths = paths;
        this.sum = sum;
    }
}
var mctFromLeafValues = function(arr) {
    const n = arr.length;

    // Initialize the DP table
    const dp = Array.from({ length: n }, () => Array(n).fill(-1)); 

    function dfs(l, r) {
        // Base Case: Empty or Single-Element Subarray
        if (l >= r) return 0;  
    
        // Check for Memoized Result
        if (dp[l][r] !== -1) return dp[l][r]; 
    
        let result = Infinity;
    
        // Explore possible divisions (root positions)
        for (let i = l; i < r; i++) {
            // Recursively calculate costs for left and right subtrees           
            let leftCost = dfs(l, i);
            let rightCost = dfs(i + 1, r); 
    
            // Find maximum leaf in each subtree for non-leaf node cost
            let maxLeft = Math.max(...arr.slice(l, i + 1));
            let maxRight = Math.max(...arr.slice(i + 1, r + 1)); 
    
            // Cost of the current non-leaf node + costs of subtrees
            let currentCost = maxLeft * maxRight + leftCost + rightCost;
    
            result = Math.min(result, currentCost); 
        }
    
        dp[l][r] = result; // Store the result
        return result;
    }
    

    const result = dfs(0, arr.length - 1); 
    return result; // Return the calculated minimum cost
};
console.log(mctFromLeafValues([4,11]))