// Stack
// Time and Space: O(n)...for the stack and traversing the array
var trap = function(wtr) {
    let rainWater = 0, stack = []
    
    for (let i = 0; i < wtr.length; i++) {
        let v = wtr[i]

        if (!stack.length && v > 0) {stack.push(i); continue;}
        if (!stack.length && v <= 0) continue;

        first = wtr[stack[0]]
        
        if (v >= first) { // collect rain water because we will ensure the max height is always at the beginning
            while (stack.length !== 1) {
                rainWater += (first - wtr[stack.pop()])
            }
            stack[0] = i // insert new max height
        } else {
            stack.push(i) // we have not found the max height yet
        }
    }
    // find right boundary height...it cannot be the last height
    while (stack.length >= 2 && wtr[stack[stack.length-2]] >= wtr[stack[stack.length-1]]) {
        stack.pop();
    }
    // remove boundaries and now calculate...max will now be on the right as we traverse left since the leftMax is guaranteed to be biggest
    let rightMax = wtr[stack.pop()]
    let leftMax = stack.shift();
    while (stack.length) {
        let val = wtr[stack.pop()]
        if (val < rightMax) {
            rainWater += (rightMax - val)
        } else {
            rightMax = val;
        }
    }
    return rainWater;
};
console.log(trap([9,6,8,8,5,6,3])) // = 3