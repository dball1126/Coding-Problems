function helper(pos, cnt, f) {
    if (cnt > k) return 0;

    if (pos === num.length) {
        return cnt === k ? 1 : 0;
    }

    // Note: Consider optimizing DP storage if possible 
    if (DP[pos][cnt][f] !== -1) return DP[pos][cnt][f];

    let res = 0;
    let limit = f === 0 ? num[pos] : 9;

    for (let dgt = 0; dgt <= limit; dgt++) {
        let nf = f;
        let ncnt = cnt;
        if (f === 0 && dgt < limit) nf = 1;
        if (dgt === d) ncnt++;
        if (ncnt <= k) res += helper(pos + 1, ncnt, nf);
    }

    DP[pos][cnt][f] = res;
    return res;
}

function solve(b) {
    num = [];
    while (b > 0) {
        num.push(b % 10);
        b = Math.floor(b / 10);
    }
    num.reverse();

    // Initialize DP (Optimization may be possible)
    DP = Array(12).fill().map(() => 
        Array(12).fill().map(() => 
            Array(2).fill(-1)
        )
    );

    return helper(0, 0, 0);
}

// Input (you may need to use 'process' for command-line input, or suitable input methods)
let a = 100 
let b = 250;


let res = solve(b) - solve(a - 1);
console.log(res);
