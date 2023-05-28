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
    for (let i = 0; i < n; i++) {
        let word = readLine().trim();
        if (word.length <= 10) {
            console.log(word);
        } else {
            console.log(word[0] + (word.length - 2) + word[word.length - 1]);
        }
    }
});
