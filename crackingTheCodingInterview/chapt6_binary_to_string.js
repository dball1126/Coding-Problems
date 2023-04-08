const binaryToString = (n) => {
    let result = ""
    while (result.length < 32) {
        n = n * 2
        if (n >= 1) {
            result += 1
            n -=1
        } else {
            result += 0
        }

    }
    return result;
}

console.log(binaryToString(0.625))
