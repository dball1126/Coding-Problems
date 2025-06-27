/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Backtracking
// Time & Space: O(n * n!) + O(1) + O(n*n)  + (n * log(n)) = O(n!) 
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b)
    const result = [], n = nums.length
    const keys = new Set()
    
    const backtrack = (curr) => {
        if (curr.size === nums.length) {
            let arr = Array.from(curr).map(v => nums[v])
            let key = arr.join("")
            if (!keys.has(key)) {
                keys.add(key); result.push(arr)
            }
            return
        }
        
        for (let i = 0; i < n; i++) {
            if (!curr.has(i)) {
                curr.add(i)
                backtrack(curr)
                curr.delete(i)
            }
        }

    }
    backtrack(new Set())
    return result;
}
console.log(permuteUnique([-1,2,-1,2,1,-1,2,1]))
// 1 2 3
// set, 0

// {} -------------------{1}

// {0}   ------------------------------- {0, 2} --------------------0,2,1

// {0, 1}

// {0,1, 2}