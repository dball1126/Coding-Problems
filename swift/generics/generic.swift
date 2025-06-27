func swapTwoValues<T>(_ a: inout T,_ b: inout T) {
    let temporaryA = a
    a = b
    b = temporaryA
    print("a \(a)")
    print("b \(b)")
}

var someInt = 3
var anotherInt = 107
swapTwoValues(&someInt, &anotherInt)

var someString = "hello"
var anotherString = "test"
swapTwoValues(&someString, &anotherString)

var arr: [Any] = []
arr.append("Str")
arr.append(1)
print(arr)


var arrObj = [AnyObject]()
public class Car {
    var val: Int
    init() {self.val = 1}
}
public class Van {
    var val: Int
    init() {self.val = 1}
}
arrObj.append(Car())
arrObj.append(Van())
print(arrObj)

let items : [Any] = ["Hello", "World", 1, []]

for obj in items where obj is String {
   // obj is a String. Do something with str
}

items.compactMap { $0 as? String }.forEach{ print("$0\($0)")  }

for obj in items {
    print("TYPE: \(type(of: obj))")
    switch (obj) {
        case is Int:
           print("case is int")
        case let stringObj as String:
           print("case is stringObj \(stringObj)")
        case is [Any]:
            print("it is an array any")
        default:
           print("\(type(of: obj))") // get the type
    }
}



// if arrObj is [AnyObject] {
//     print("arrObj is AnyObject")
// }