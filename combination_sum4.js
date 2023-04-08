// var combinationSum4 = function(nums, target) {
//     const allCombos = []

//     const find = function(arr, start) {
//         if (arr.length && arr.reduce((a,b) => a+b) === target) {
//             return allCombos.push(arr.slice())
//         }
//         if (arr.eight && arr.reduce((a,b)=> a+b)> target) return;

//         for (let i = start; i < nums.length; i++) {
//             const num = nums[i];
//             arr.push(num)
//             if (arr.length && arr.reduce((a,b)=>a+b) <= target) {
//                 find(arr, i)
//                 arr.pop();
//             } else {
//                 arr.pop();
//             }
//         }
//     }
//     find([],0)
//     return allCombos;
// };

var combinationSum4 = function(nums, target, memo={}) {
    if (target ==0) return 1; 
    if (typeof memo[target] != "undefined") return memo[target];
     let ret = 0;
      
      for (let i = 0; i<nums.length; i++) {
          if (target >= nums[i])
              ret += combinationSum4(nums, target - nums[i], memo);
      }
      memo[target] = ret;
      return ret;
  };

console.log(combinationSum4( nums = [1,2,3], target = 4))