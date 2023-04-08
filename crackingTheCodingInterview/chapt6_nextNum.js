const nextNumber = (num) => {
    let nextMax = 0, nextMin = 0
    const countOneBits = (n) => {
        let count = 0;
        while (n !== 0) {
            if (n & 1) {
                count ++
            }
            n >>= 1
        }
        return count;
    }
    let mainCount = countOneBits(num)
    const findNextMax = (n) => {
        while (n < 2**31) {
            n += 1
            if (countOneBits(n) === mainCount) return n
        }
    }
    const findNextMin = (n) => {
        while (n > -(2**31)) {
            n -= 1
            if (countOneBits(n) === mainCount) return n
        }
    }
    nextMax = findNextMax(num)
    nextMin = findNextMin(num)
    console.log(nextMax)
    console.log(nextMin)
}

console.log(nextNumber(6))