var isPowerOfTwo = function(n) {
    if (n < -1) n = ~n + 1
    
   if (n === 0) return false
   if (n === 1) return true
   if (n === 2 ) return true
    let val = 1
   while (val <= n) {
       if (val === n) return true
        val <<= 1
        n >>= 1
   }
   return val === n
};
console.log(isPowerOfTwo(1073741825))