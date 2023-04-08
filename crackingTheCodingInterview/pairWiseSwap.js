// flip an integers bits 0,1   2,3   4,6
const pairWiseSwap = (n) => {
    for(let i = 0; i < 32; i+=2) {
        let leftBit = n & (1 << i)
        let rightBit = n & (1 << (i+1))
        
        if (rightBit) {
            n |= (1 << i)
        } else {
            n &= (~(1 << i))
        }

        if (leftBit) {
            n |= (1 << (i+1))
        } else {
            n &= (~(1 << (i+1)))
        }
    }
    return n
}

console.log(pairWiseSwap(4))