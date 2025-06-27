/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Bitmasking
// Time complexity: O(n * 2^n)
// Space Complexity: O(1) if we don't count the output array
function subsets(nums) {  
    const len = BigInt(nums.length), subsets = []

    for (let mask = 0; mask < (Number(1n << len)); mask++) { // 1 << n is equivalent to 2^n
        let set = []
        for (let i = 0; i < len; i++) {
            if (mask & (1 << i)) { // check to see if the ith bit is set
                set.push(nums[i])
            }
        }
        subsets.push(set)
    }
    return subsets
}

console.log(subsets([1,2,3]))
// [
//     [],       [ 1 ],
//     [ 2 ],    [ 1, 2 ],
//     [ 3 ],    [ 1, 3 ],
//     [ 2, 3 ], [ 1, 2, 3 ]
//   ]

