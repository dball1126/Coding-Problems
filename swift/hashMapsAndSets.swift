// 1. empty dictionary
var emptyDict: [String: Int] = [:] // Key type: String, value type: Int
print("Empty dictionary:", emptyDictionary) // Output: Empty dictionary: [:]

// 2. Dictionary with an initializer
var citiesPopulation = Dictionary<String, Int>() // SAme as [String: Int]()
citiesPopulation["New York"] = 8_400_000
citiesPopulation["Los Angeles"] = 3_900_000
print("Cities population (initialized):", citiesPopulation)
// Output: Cities population (initialized): ["New York": 8400000, "Los Angeles": 3900000]

var fruitPrices: [String: Double]= [
    "Apple": 1.25,
    "banana": 0.75
]

// deletion
fruitPrices["Apple"] = nil
if let removeValue = fruitPrices.removeVale(forKey: "banana") {
}

// insertion
fruitPrices["Screws"] = 1.1