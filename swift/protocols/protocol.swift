protocol Vehicle {
    func start()
}

class Car: Vehicle {
    func start() {
        print("Startgin the care with the key.")
    }
}

class Motorbike: Vehicle {
    func start() {
        print("Kickstarting the motorbike")
    }
}

let car = Car()
print(car.start())

let motorbike = Motorbike()
print(motorbike.start())