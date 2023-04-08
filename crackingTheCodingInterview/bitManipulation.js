// const getBit = (num, idx) => {
//     return ((num & (1 << idx)) != 0)
// }

// console.log(getBit(4, 2))


const conversion = (n1, n2) => {
    let v = n1 ^ n2;
    let count = 0;
    (v >>> 0).toString(2).split("").forEach(b => {
        if (b === '1') count++ 
    })
    return count;
}

console.log(conversion(29, 15))