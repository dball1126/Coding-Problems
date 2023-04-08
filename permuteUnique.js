var permuteUnique = function(nums) {
    const combos = {};

    const backtrack = (arr, curr) => {
        if (curr.length === nums.length) return combos[curr.slice()] = curr.slice()

        for (let i = 0; i < arr.length; i++) {
            curr.push(arr[i])
            let newArr = arr.slice()
                newArr.splice(i, 1)
            if (combos[curr] === undefined) {
                backtrack(newArr, curr)
            }
            curr.pop();
        }
    }
    backtrack(nums, [])
    return Object.values(combos)
};

console.log(permuteUnique([1,1,2]))