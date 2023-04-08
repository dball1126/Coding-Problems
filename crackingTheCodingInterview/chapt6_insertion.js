const insertion = (n, m, i, j) => {
    let begin = false
    m = (m >>> 0).toString(2)
    for (let i = 0; i < m.length; i++) {
        let num = m[i];
        if (num !== "1" && !begin) continue;

        if (num === "1") {
            let mask = 1 << j
            n |= mask
            begin = true
        } else {
            n &= ~(1 << j)
        }
        j--
    }
    return (n).toString(2)
}

console.log(insertion(1024, 19, 2,6))