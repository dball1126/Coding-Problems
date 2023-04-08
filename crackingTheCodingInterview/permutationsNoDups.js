// /** Backtracking
//  * Time and Space: O(!N)
//  */
// const permutations = (str) => {
//     let perms = [];
//     const backtracking = (i, curr) => {
//         if (i >= str.length) return;
//         if (curr.size === str.length) return perms.push(Array.from(curr).join(""))

//         for (let j = i; j < str.length; j++) {
//             if (!curr.has(str[j])) {
//                 backtracking(0, curr.add(str[j]))
//                 curr.delete(str[j])
//             }
//         }
//     }
//     backtracking(0, new Set());
//     return perms
// }




// console.log(permutations("abc"))


/** Backtracking
 * Time and Space: O(!N)
 */
 const permute = (arr) => {
    let perms = [];
    const backtracking = (i, curr) => {
        if (i >= arr.length) return;
        if (curr.size === arr.length) return perms.push(Array.from(curr))

        for (let j = i; j < arr.length; j++) {
            if (!curr.has(arr[j])) {
                backtracking(0, curr.add(arr[j]))
                curr.delete(arr[j])
            }
        }
    }
    backtracking(0, new Set());
    return perms
}

console.log(permute([1,2,2]))