// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

// Notice that you can not jump outside of the array at any time.


var canReach = function(arr, start) {
    
    const queue = [start];

    while (queue.length > 0) {
        const idx = queue.shift();
        console.log(idx)
        if (arr[idx] === 0) return true;
        
        const newIdx1 = idx + arr[idx];
        const newIdx2 = idx - arr[idx];
        if (newIdx1 >= 0 && newIdx1 < arr.length && arr[idx] !== -1) queue.push(newIdx1)
        if (newIdx2 >= 0 && newIdx2 < arr.length && arr[idx] !== -1) queue.push(newIdx2)

        arr[idx] = -1 // mark as vistied already.
        console.log(queue)
    }

    return false;
};

console.log(canReach([3,0,2,1,2], 2))