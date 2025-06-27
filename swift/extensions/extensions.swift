extension Double {
    var radians: Double {
        return self * .pi / 180
    }
}

let degrees = 180.0
print(degrees.radians)

