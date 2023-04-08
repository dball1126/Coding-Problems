const allCombos = (num) => {
    const combos = []

    const helper = (nums, start) => {
        if (nums.length === num) return combos.push(nums.slice())

        for (let i = start; i <= num; i++) {
            nums.push(i)
            helper(nums, i+1)
            nums.pop();
        }
    }
    helper([], 1)
    return combos

}
console.log(allCombos(3))