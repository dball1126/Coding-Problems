var permute = function(nums) {
    const combos = [];

    const backtrack = (arr, curr) => {
        if (curr.length === nums.length) {
            return combos.push(curr.slice())
        }

        for (let i = 0; i < arr.length; i++) {
            curr.push(arr[i])
            let newNums = arr.slice()
            newNums.splice(i, 1)
            backtrack(newNums, curr)
            curr.pop();
        }
    }
    backtrack(nums, [])
    return combos
};


console.log(permute([1,2,3]))