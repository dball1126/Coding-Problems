/**
 * @param {number[]} nums
 * @return {number}
 */
 const findPeakElement = (nums) => {
    if (nums.length === 1) return 0
    let [s, e] = [0, nums.length-1]

    let bSearch = (bS, bE) => {
        if (bE < bS) return;
        let m = Math.floor((bE - bS) / 2) + bS
        let L = nums[m-1] ? nums[m-1] : -Infinity
        let R = nums[m+1] ? nums[m+1] : -Infinity
        let result;

        if (nums[m] > R && nums[m] > L) {
            return m
        }

        if (L > nums[m]) {
            result = bSearch(bS, m -1)
            if (result !== undefined) return result;
        }
        if (R > nums[m]) {
            result = bSearch(m + 1, bE)
            if (result !== undefined) return result;
        }

        if (L < nums[m]) {
            result = bSearch(bS, m -2)
            if (result !== undefined) return result;
        }

        if (R < nums[m]) {
            result =  bSearch(m + 2, bE)
            if (result !== undefined) return result;
        }

        if (nums[m] === R && nums[m] === L) {
            let result = bSearch(bS, m -2)
            if (result === undefined) {
                result = bSearch(m + 2, bS)
            }
            if (result !== undefined) return result;
        }
    }
    return bSearch(s, e)
  };

  console.log(findPeakElement([4,7,8,8,3,2,1,10,12,14,13]))