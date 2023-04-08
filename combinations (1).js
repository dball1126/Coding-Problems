var combine = function(n, k) {
    let allCombos = [];
    
    const find = (nums, start) => {
        console.log("test")
        if (nums.length === k) {
            console.log("test2")
            return allCombos.push(nums.slice())
        } // O(n * (n-1))  n*2
        
        for(let i = start; i <= n; i++) {
            console.log("test3")
            nums.push(i)
            find(nums, i+1)
            nums.pop();
        }
    }
    
    find([], 1)
    return allCombos
};
console.log(combine(4, 2))