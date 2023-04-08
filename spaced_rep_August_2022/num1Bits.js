/**
 * Time & Space: O(1)
 */
var hammingWeight = function(n) {
   count = 0;
   while (n !== 0) {
       count++
       n &= (n-1)
   }
   return count;
};

console.log(hammingWeight(-1))