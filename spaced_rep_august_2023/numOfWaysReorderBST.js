/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var generateCombinations = function(nums) {
    const result = [];
    
    // Recursive function to generate valid combinations
    function backtrack(start, path) {
        if (start === nums.length) {
            result.push(path.slice());
            return;
        }
        
        // Include the current element in the path
        path.push(nums[start]);
        backtrack(start + 1, path);
        path.pop(); // Backtrack
        
        // Skip the current element
        backtrack(start + 1, path);
    }
    
    backtrack(0, []); // Start the backtracking process
    
    return result;
};


// Example usage
const nums = [3, 1, 2, 5, 4, 6];
const combinations = generateCombinations(nums);
console.log(combinations);