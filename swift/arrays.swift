let numbers = [11,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for loop one
var sum = 0
for num in numbers {
    sum += num
}
print("Sum 1: \(sum)")

// for loop two
numbers.forEach { num in
    sum += num
}
print("Sum 2: \(sum)")

// for loop three
for (index, num) in numbers.enumerated() {
    sum += numbers[index]
    sum += num
}
print("Sum 3: \(sum)")

// for loop four
for i in 0..<numbers.count {
    sum += i
    print("I: \(i)")
}
print("Sum 4: \(sum)")

// for loop five
var idx = 0
while idx < numbers.count {
    sum += numbers[idx]
    idx += 1
}
print("Sum 5: \(sum)")

// for loop six
let sum2 = numbers.reduce(0, +)
print("Sum 6: \(sum2)")

// for loop seven
let sum3 = numbers.map{$0 * 2}
print("Sum 7: \(sum3)")

// for loop eight
numbers.reversed().forEach{ num in 
    sum += num
}
print("Sum 8: \(sum)")

// Array of Any: Can hold structs, enums, classes, functions, etc.
var mixedArray: [Any] = []

mixedArray.append("Hello")               // String
mixedArray.append(123)                   // Int
mixedArray.append(true)                  // Bool
mixedArray.append(3.14)                  // Double
mixedArray.append(["a": 1, "b": 2])      // Dictionary


var arr10:[Any] = []
arr10.append(1)
arr10.append(true)


