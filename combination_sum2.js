const combinationSum2 = (candidates, target) => {
    let allCombos = {};

    const find = (arr, index) => {
        const nArr = getArr(arr, candidates);
        let testArr = []
        console.log(nArr)
        if (nArr && nArr.length) {
            console.log("arr true: " + nArr)
        } else {
            console.log("arr length " + nArr)
        }

        if (getSum(nArr) === target && !allCombos.hasOwnProperty(arr)) {
            return allCombos[arr] = nArr
        } 
        if (getSum(nArr) >= target) return;

        for (let i = index; i < candidates.length; i++) {
            arr.push(i)
            find(arr, i+1)
            arr.pop();
        }
    }
    find ([], 0)

    const result = [];
    for(let c in allCombos) {
        if (c && c.length > 0) {
            let nums = getArr(c, candidates);
            if (nums) {
                result.push(nums);
            }
        }
    }

    return result.length ? result: [];
}

const getSum = (arr) => arr && arr.length ? arr.reduce((a,b) => a+b) : 0;

const getArr = (c, candidates) => { 
        if (c === undefined|| c.length === 0) return 
        if (typeof(c) !== Array) return;
        const newArr = c.length > 0 ? c.map(i => candidates[i])  : undefined;
        return newArr ? newArr : undefined
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8))