var combinationSum2 = function(candidates, target) {
    if (getSum(candidates) < target) return [];
    // candidates.sort((a,b)=> a-b);

    const allCombos = new Map();

    const find = (arr, idx) => {
        if (getSum(arr) === target) {
            return allCombos.set(arr.join(""), arr.slice());
        } else if (getSum(arr) > target) {
            return;
        }

        for (let i = idx; i < candidates.length; i++) {
            const num = candidates[i];
            arr.push(num)
            if (!allCombos.has(arr.join(""))) {
                find(arr, i+1)
            }
            arr.pop();
        }
    }

    find([], 0)
    return Array.from(allCombos.values())
}

const getSum = (arr) =>{
    return arr.length === 0 ? 0 : arr.reduce((a,b)=> a+b);
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8))