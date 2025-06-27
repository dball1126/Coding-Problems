function subarray_stack(nums) {
    const N = nums.length;
    const stack = []; 
    const mxLeft = new Array(N).fill(0);
    const mxRight = new Array(N).fill(0);
    const ans = [];
  
    // Initialize mxLeft and mxRight
    for (let i = 0; i < N; i++) {
      mxLeft[i] = i + 1;
      mxRight[i] = N - i;
    }
  
    // Calculate mxLeft (and mxRight implicitly)
    for (let i = 0; i < N; i++) {
      while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[i]) {
        mxRight[stack.pop()] = i - stack[stack.length - 1]; 
      }
  
      if (stack.length === 0) {
        mxLeft[i] = i + 1;
      } else {
        mxLeft[i] = i - stack[stack.length - 1];
      }
  
      stack.push(i);
    }
  
    // Calculate final result
    for (let i = 0; i < N; i++) {
      ans.push(mxLeft[i] + mxRight[i] - 1);
    }
  
    return ans;
  }
  
  

console.log(subarray_stack([3, 4, 1, 6, 2] ))