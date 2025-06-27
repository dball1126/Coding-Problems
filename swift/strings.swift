import Foundation

var myString = "  Hello, Swift!  \n" // Added a newline for more clarity
let trimmedString = myString.trimmingCharacters(in: CharacterSet.whitespacesAndNewlines) // Correct!
print(trimmedString) // Output: "Hello, Swift!"

var str = "test"

let offsettwo = 2
let offset = 1 // The index we want to modify (the 'e')

// modify indexes
if let indexToReplace = str.index(str.startIndex, offsetBy: offset, limitedBy: str.endIndex) {
    str.replaceSubrange(indexToReplace...indexToReplace, with: "Z")
    print(str)
}

// Use index(_:offsetBy:limit:) which returns an Optional<String.Index>
// This is robust if the offset might go out of bounds.
// if let indexToReplace = str.index(str.startIndex, offsetBy: offset, limitedBy: str.endIndex) {
//     str.replaceSubrange(indexToReplace...indexToReplace, with: "Z")
// } 

// uppser cases
var inputStr = "swift str"
var outputStr = ""
for char in inputStr {
    outputStr.append(char.uppercased())
}
print(outputStr)
var outputstr2 = ""

//lower cases
for char in outputStr {
    outputstr2.append(char.lowercased())
}
print(outputstr2)

// splitting strings
var splitstr = "this,is,a,test,to,learn"
var arr = splitstr.split(separator: ",")
print(arr)

// swith indexes in place
arr.swapAt(1, 3)
print(arr)


var s: String = "misfit"

s.forEach{ char in print(char)}


var test = ""

