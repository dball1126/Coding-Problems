const permutations = (str) => {
    if (!str.length) return []
    const permutations = [];

    const backtrack = (i, curr) => {
        if (i >= str.length) return
        curr += str[i]
        if (curr.length === str.length) return permutations.push(curr)
        for (let j = i+1; j < str.length; j++) {
            backtrack(j, curr)
        }
    }
    for (let i = 0; i < str.length; i++) {
        backtrack(i, "")
    }
    return permutations;
}

console.log(permutations("abc"))