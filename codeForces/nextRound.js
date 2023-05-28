const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const input = []
rl.on('line', line => {
  input.push(line.split(' ').map(e => parseInt(e)))
})
// Time: O(n)
// Space: O(1)
rl.on('close', () => {
    let [n, k] = input[0]
    arr = input[1]
    for (let i = 0; i < n; i++) {
        let num = arr[i]
        if (i === k-1) {
            if (num === 0) break;
            while (k < n && arr[k] === num) k++
            break;
        }
    }
    if (k !== 0 && arr[k-1] === 0) {
        while (k >= 0 && arr[k-1] === 0) k--
    }
    console.log(k);
})
// 8 5
// 10 9 8 7 7 7 5 5
// = 6
