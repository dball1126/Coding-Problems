/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0;
    if (num === 0) return 0;
    
    while (num > 0) {
        // if (num === 2) {
        //     count++;
        //     break
        // } else if (num === 1) {
        //     count++
        //     break
        // }
    
        if (num % 2 === 0){
            count++;
            num = num / 2
        } else {
            count++;
            num-=1
        }
        console.log(num)
    }
    return count
};

console.log(numberOfSteps(14))