import Foundation

class Animal {
    let name: String
    let species: String
    var age: Int

    init(name: String, species: String, age: Int) {
        self.name = name
        self.species = species
        self.age = age
    }
    func makeSound() {
        print("\(species) makes a sound age is \(age)")
    }
}

class Dog: Animal {
    init() {
        super.init(name: "date", species: "Dog", age: 20)
    }
    override func makeSound() {
        print("THIS IS A DOG")
    }
}

let doggy = Dog()
print(doggy.makeSound())

let animalistic = Animal(name: "Animal", species: "Any", age: 100)
print(animalistic.makeSound())