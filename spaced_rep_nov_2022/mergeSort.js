// Divide and Conquer
// Merge Sort
// Time: O(n * log(n)), Space: O(n)
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    let m = Math.floor(nums.length / 2), left = [], right = []
    for (let i = 0; i < nums.length; i++) {
        if (i < m) {
            left.push(nums[i])
        } else {
            right.push(nums[i])
        }
    }
    return merge(sortArray(left), sortArray(right))
}

const merge = (nums1, nums2) => {
    const order = []
    while (nums1.length || nums2.length) {
        let next1 = Infinity, next2 = Infinity
        if (nums1.length) next1 = nums1[0]
        if (nums2.length) next2 = nums2[0]
        if (next1 <= next2) {
            order.push(nums1.shift())
        } else {
            order.push(nums2.shift())
        }
    }
    return order
}
console.log(sortArray([6,4,1,2,4,6,0])) // = [0, 1, 2, 4, 4, 6, 6 ]
