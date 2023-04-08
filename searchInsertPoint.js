var searchInsert = function(nums, target) {
    let index = 0;

    const bSearch = (s, f) => {
        if (s === f || f < s) return;
        if (s+1 === f) {
           if (nums[s] > target) {
               return index = s +1
           } else {
               if (s === 0) {
                   return 0
               } else {
                   return s - 1
               }
           }
        }
        let mid = Math.floor((f-s)/2) + s;
        if (nums[mid] === target) return index = mid;
        if (nums[mid] > target) {
            s = mid+1;
        } else {
            f = mid;
        }
       bSearch(s, f) 
    }
    bSearch(0, nums.length)
    return index
};

console.log(searchInsert([1,3,5,6], 0))