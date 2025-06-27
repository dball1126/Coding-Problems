/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Iterative In-Place Quick Sort
// Time: O(n * log(n))
// Space: O(log(n))
// var sortArray = function(nums) {
//     let n = nums.length;
//     const queue = [[0, n-1]]
//     while (queue.length) {
//         const [tmpl, tmpr] = queue.shift()
//         let l = tmpl, r = tmpr, m = Math.floor((tmpr+tmpl)/2)
//         if (l >= r) continue
//         const mVal = nums[m];
        
//         while (l <= r) {
//             while (nums[l] < mVal) l++
//             while (nums[r] > mVal) r--
//             if (l < r) {
//                 [nums[l], nums[r]] = [nums[r], nums[l]]
//                 l++; r--;
//             }
//         }
        
//             if (tmpl < l-1) queue.push([tmpl, l-1])
//             if (tmpr > l) queue.push([l, tmpr])
    
//     }
//     return nums
// };


/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Iterative in-place Quick Sort:
// Time: O(n * log(n))
// Space: O(log(n)) 
const sortArray = (nums) => {
   const n = nums.length;
   const queue = [[0, n-1]]
   while (queue.length) {
    const [LC, RC] = queue.shift();
    let l = LC, r = RC, pivot = nums[Math.floor((RC + LC) / 2)]
    while (l <= r) {
        while (nums[l] < pivot) l++
        while (nums[r] > pivot) r--
        if (l <= r) {
            [nums[l], nums[r]] = [nums[r], nums[l]]
            l++; r--;
        }
    }
    if ((l-1) > LC) queue.push([LC, l-1])
    if (l < RC) queue.push([l, RC])
   }
   return nums;
}

console.log(sortArray([3,1,5,2]))//=[ 1, 2, 3, 5 ]
