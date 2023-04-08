/**
 * @param {number[]} arr
 * @return {number}
 */
var missingNumber = function(arr) {
    const startPattern = arr[0+1] - arr[0];
    const endPattern = arr[arr.length-2 + 1] - arr[arr.length-1];
    let rising;

    if (arr[0] >= arr[1] && arr[arr.length-2+ 1] - arr[arr.length-1]){
        rising = true;
    } else {
        rising = false;
    }

    const pattern;
    let num1
    let num2
    if(rising) {
        num1 = startPattern
        num2 = endPattern
        
    }

    
};

const findPattern = (n1, n2, nums, rising ,startPattern, endPattern) => {
    let num1
    let num2
    let missing1
    let missing2
    if (rising) {
        num1 = startPattern;
        num2 = endPattern
    
    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i+1] - nums[i] !== nums[i] + startPattern){
            startPattern = null;
            missing1 = null 
        }
        if (nums[i+1] - nums[i] !== nums[i] + endPattern) {
            endPattern = null;
            missing2 = null
        }
        
        
    }
    }

    if (startPattern === null) {
        return endPattern
    } else {
        return startPattern
    }
} 


