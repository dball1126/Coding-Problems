const quickSort = (nums) => {
    if (!nums.length || nums.length === 1) {
        return nums
    } else if (nums.lengt ===2) {
        if (nums[0] < nums[1]) {
            return
        } else {
            [nums[0], nums[1]] = [nums[1], nums[0]]
        }
    }
    let pivot = Math.floor(nums.length / 2)
    const num = nums[pivot]
    let [left, right] = [[], []];
    nums.forEach(n => {
        if (num > n) {
            left.push(n)
        } else if (num < n) {
            right.push(n)
        }
    })
    return ([...quickSort(left)].concat(num).concat([...quickSort(right)]))

}

console.log(quickSort([10,3,8,2,1]))