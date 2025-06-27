class StepCounter {
    var totalSteps: Int = 0 {
        willSet(newTotalSteps) {
            print("about to set totalSteps to  \(newTotalSteps)")
        }
        didSet {
            if totalSteps > oldValue {
                print("added \(totalSteps - oldValue) steps")
            }
        }
    }
}

let stepCounter = StepCounter()
stepCounter.totalSteps = 200
