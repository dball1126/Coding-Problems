var combinationSum3 = function(k, n) {
    const allCombos = [];

    const find = (arr,start) => {
        if (arr.length && arr.reduce((a,b)=>a+b) === n && arr.length === k)
            return allCombos.push(arr.slice()) // make a copy of the arr to avoid issues with it mutating via reference

        if (arr.length >= k ||  (arr.length && arr.reduce((a,b)=>a+b) >= n))
            return
        
        for (let i = start; i <= n && i < 10 ; i++) {
            arr.push(i)
            find(arr, i+1) // recursive call
            arr.pop() // backtrack
        }
    }
    find([], 1);
    return allCombos
};

console.log(combinationSum3(k = 3, n = 2))