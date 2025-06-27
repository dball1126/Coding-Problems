/**
 * @param {number} n
 * @return {number}
 */
// Top-Down Dynamic Programming
// Time and Space: O(n)
var countPrimes = function(n) {
    
    let memo = [...new Array(n)]

    const dp = (num) => {
        if (num <= 1) return memo[num] = 0
        if (memo[num] !== undefined) return memo[num]
        let val  = dp(num-1)
        let count = 1
        
        for (let v = 2; v < num; v++) {
            if (num % v === 0) {
                count = 0;
                break;
            }   
        }
        return memo[num] = count + val
    }

    return dp(n-1)
};

console.log(countPrimes(n =3))