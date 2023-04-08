const combinations = (nums, target) => {
    const allCombos = [];


    const find = (fArr, start) => {
        let sum = 0;
        if (fArr.length) sum = fArr.reduce(function(n,p){return n+p});
        if (sum === target) return allCombos.push(fArr.slice());
        if (sum > target) return fArr;

        for (let idx = start; idx < nums.length; idx++) {
            const num = nums[idx];
            fArr.push(num);
            const copy = fArr.slice();

           
                find(fArr, idx)
           let newSum = fArr.reduce(function(n,p){return n+p});

                if (newSum+nums[idx] <= (target)) {
                    find(fArr, idx)

                } else {
                    fArr.pop();
                }
            
            find(fArr, idx+1);
            
        }

    }

    find([], 0)

    return allCombos
}

console.log(combinations([2,3,6,7], 7))