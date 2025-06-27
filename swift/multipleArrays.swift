let matrix1: [[Int]] = [
    [1,2,3],
    [4,5,6]
]

// Example: A 4x5 array of zeros
let rows = 2
let columns = 2

let matrix2 = Array(repeating: 0, count: columns) // e.g., [0, 0, 0, 0, 0]

// Example: A 3x3 identity matrix
let size = 3
var matrix3: [[Int]] = [] // Start with an empty outer array

for r in 0..<size {
    var row: [Int] = [] // Create an empty inner array for each row
    for c in 0..<size {
        if r == c {
            row.append(1) // Diagonal elements are 1
        } else {
            row.append(0) // Off-diagonal elements are 0
        }
    }
    matrix3.append(row) // Add the completed row to the outer array
}


// Example: Dynamic dimensions with random values
let dynamicRows = 2
let dynamicCols = 4
var dynamicMatrix: [[Double]] = []

for _ in 0..<dynamicRows {
    var row: [Double] = []
    for _ in 0..<dynamicCols {
        row.append(Double.random(in: 0.0...10.0)) // Add random values
    }
    dynamicMatrix.append(row)
}


// Define dimensions
let depth = 2

// The shortest way:
var threeDArray = Array(repeating: Array(repeating: Array(repeating: 1, count: columns), count: rows), count: depth)
print("*************************************")
threeDArray[0][0][0] = 2

// var 2 d array
var twoDArray = Array(repeating: Array(repeating: 0, count: columns), count: rows)
print(twoDArray)
