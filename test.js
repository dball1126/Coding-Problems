let n = 5;
// fibBottomUp(1, 1, 2, n);

const fibBottomUp = (i, j, count, n) => {
    if (count > n) return 1;
    if (count == n) return i + j;
    console.log(count)
    let result = fibBottomUp(j, i + j, count + 1, n)
    return result;
}

// int n = 5;
// fibTopDown(n);

const fibTopDown = (n) => {
    if (n <= 1) return 1;
    console.log(n)
    return fibTopDown(n - 1) + fibTopDown(n - 2);
}

// console.log(fibTopDown(n))

// console.log(fibBottomUp(1, 1, 2, n))




const lcs = (t, s, i = 0, j = 0) => {
    if (i >= t.length || i < 0 || j < 0 || j >= s.length) return 0;;

    if (t[i] === s[j]) {
        return 1 + lcs(t, s, i+1, j+1)
    } else {
        return Math.max(
            lcs(t, s, i+1, j),
            lcs(t, s, i, j+1),
        )
    }
}

console.log(lcs("abced", "ace"))