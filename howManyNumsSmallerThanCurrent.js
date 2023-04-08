/**
 * time log(n * log(n)) (sorting dominates)
 */
 var smallerNumbersThanCurrent = function(numbers) {
    let nums = [...numbers]
    let result = [], map = new Map()
    nums.sort((a,b)=> a - b);
    let newNums = []
    nums.forEach((n, i) => {
        if (!map.has(n)) {
            newNums[i] = n;
            map.set(n, i)
        }
    })
    numbers.forEach((n, i) =>{
        let idx = map.get(n)
        result.push(idx)
    })
    return result
};

console.log(smallerNumbersThanCurrent([7,7,7,7]))