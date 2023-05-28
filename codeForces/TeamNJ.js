process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = "";
let input_currentline = 0;
let input_array;

process.stdin.on('data', function(chunk) {
    input = chunk;
});

function readLine() {
    return input_array[input_currentline++];
}

process.stdin.on('end', function() {
    input_array = input.split("\n");
    let n = parseInt(readLine());
    let count = 0;
    for (let i = 0; i < n; i++) {
        let nums = readLine().trim().split(" ");
        let curr = 0;
        if (nums[0] === '1') curr++
        if (nums[1] === '1') curr++
        if (nums[2] === '1') curr++
        if (curr >= 2) count++
    }
    console.log(count)
});