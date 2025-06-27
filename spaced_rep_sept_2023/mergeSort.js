// Merge Sort
// Time: O(n * log(n))
// Space: O(n)
const mergeSort = (nums) => {
    if (nums.length <= 1) return nums;
    let n = nums.length
    const merge = (left = [], right = []) => {
        let result = []
        while (left.length || right.length) {
            let v = result[result.length-1]
            if (v === undefined) v = -Infinity
            let v1 = left[0], v2 = right[0]
            if (left.length && right.length) {
                v1 < v2 ? result.push(left.shift()) : result.push(right.shift())
            } else if (left.length) {
                result.push(left.shift())
            } else if (right.length) {
                result.push(right.shift())
            }
        }
        return mergeSort(result)
    }

    const mid = Math.floor(nums.length/2)
    let left = [], right = []
    for (let i = 0; i < n; i++) {
        if ( i !== mid) {
            if (nums[i] <= nums[mid]) {
                left.push(nums[i])
            } else {
                right.push(nums[i])
            }
        }
    }
    let mLeft = merge(left), mRight = merge(right)
    return [...mLeft, nums[mid], ...mRight]
}

console.log(mergeSort([8,4,3,1,5,6,7,3,2]))