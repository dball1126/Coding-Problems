var userScores: [String:Int] = [:]


userScores["ALICE"] = 1
userScores["DAVID"] = 2
userScores["GARY"] = 3

print("initial scores \(userScores)")

var strScores: [String:String] = [:]
strScores["Status"] = "one"
strScores["Number 2"] = "two"

if let item: String = strScores["Status"] {
    print(item)
}

print(strScores)