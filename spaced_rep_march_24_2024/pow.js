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
// var myPow = function(x, n) {
//     if (n === 0) return 1
//     if (n === 1 || n === -1) return x 
//     if (n < 0) {x = 1/x; n = -1 * n}
//     let val = x;
//     if (n > 0) {
//         let pow = x
//         val *= pow
//         while (pow < n) {
//             if ((pow * pow) <= n) {
//                 pow *= pow
//                 val *= val
//             } else {
//                 pow +=1
//                 val *= x
//             }
//         }
//     } else if (n < 0) {

//     }
//     return val;
// };
console.log(myPow( x = 2.00000, n = -2))
/**
 *  x = 2  n = 10
 * 
 * val = 4, pow = 2
 * val = 16 pow = 4
   val = 32  pow = 5
   64      6
   128   7
   256  8
   512  9
   1024  10
 *
 * 
 */