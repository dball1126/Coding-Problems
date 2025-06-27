
// Time: O(log(n))
// Space: O(1)
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n < 0) {x = 1/x; n = -1 * n}
    if (n === 1) return x;
    let result = x, count = 1
    n -= 1
        while (n > 0) {
            if ( n >= count) {
                n -= count; count += count;
                result *= result;
            } else {
                n -=1; count +=1;
                result *= x
            }
        }
        return result;
};
console.log(myPow(2, 5)) // = 256››