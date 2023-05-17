/************* KEEP BELOW CODE AS IT IS *********************/
/**
 * This code has been taken from: https://codeforces.com/blog/entry/69610
 * I am not the owner of the readLine function below, understanding them require knowledge of basic NodeJS I/O and streams
 */
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


/****** BELOW HERE START WRITING YOUR CODE IN main() FUNCTION   ***************************************/
/**
 * Use "readLine()" function for input, which will return a string consisting the entire line, so accordingly split the string 
 * when required.
 *
 * I am using console.log() to output
 */
function main() {
    let input = readLine();
    input = parseInt(input);
    if (input & 1 || input <= 2) {
        console.log("NO")
    } else {
        console.log("YES")
    }
    
}