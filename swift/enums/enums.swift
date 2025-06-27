enum Season: CaseIterable {
    case spring, summer, autumn, winter
}

var currSeason: Season

currSeason = Season.summer

enum PizzaSize {
    case small, medium, large
}

var pizzaSize = PizzaSize.small

switch(pizzaSize) {
    case .small:
        print("SMALL")
    case .medium:
        print("Medium")
    case .large:
        print("large")
}

for item in Season.allCases {
    print("item \(item)")
}


enum Size : Int {
    case small = 10
    case big = 20
}

print(Size.small.rawValue)