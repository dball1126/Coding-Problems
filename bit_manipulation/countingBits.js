/**
 * Time O(n) * 32 = O(n)
 * space O(n)
 */
// var countBits = function(n) {
//     let result = [];
//     for (let i = 0; i <= n; i++) {
//         let count = 0;
//         (i).toString(2).split("").forEach(b => {
//             if (b === '1') count++
//         })
//         result.push(count)
//     }
//     return result;
// };

var countBits = function (n) {
    let result = [0]
    for (let i = 1; i <= n; i++) {
        console.log((i & (i - 1)) + 1)
      result[i] = result[i & (i - 1)] + 1
    }
    
    return result
  };

console.log(countBits(10))