

var jump = function(nums) {

    let min = Infinity;
   
    let flag = false
    let set = new Set();
    let queue = [...nums]

    if (nums[0] >= queue.length) return 1;
    let start = nums.shift();
    
    let steps = 0;
    while(queue.length || start > 0) {
        start-=1;
        let curr = queue.shift();
        for (let i = curr; i > 0; i--) {
            if (set.has(i)){
                set.add(i)
                queue.push(nums[i])
                }
            steps++;
            console.log(nums[i])
            if (nums[i] >= nums.length) {
                min = Math.min(min, steps)
                steps = 0;
                break
            }
        }
    }    
    return min
};

console.log(jump([2,3,1,1,4]))
// use a Queue
// create another Queue....a level

[2,2,2,2,1,3]

// newmax = 2              oldmax = 2 steps 1

// newmax = 3  

//newmax = 4             2 = 2             steps = 2             oldmax = 4

//newmax = 4         

// newmax = 4       i = 4        steps = 3         oldmax = 4