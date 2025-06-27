import Foundation

func dispatchEventMethod4() {
    print("\n--- Testing Event Type 4: Dispatch Group ---")
    print("Method 4: Starting event dispatch process on main thread.")

    let group = DispatchGroup()
    let concurrentQueue = DispatchQueue.global(qos: .userInitiated)

    group.enter() // Indicate a task is starting
    concurrentQueue.async {
        print("Method 4: Task A started in group (Thread: \(Thread.current)).")
        Thread.sleep(forTimeInterval: 0.8)
        print("Method 4: Task A finished.")
        group.leave() // Indicate task A has finished
    }

    group.enter() // Indicate another task is starting
    concurrentQueue.async {
        print("Method 4: Task B started in group (Thread: \(Thread.current)).")
        Thread.sleep(forTimeInterval: 0.4)
        print("Method 4: Task B finished.")
        group.leave() // Indicate task B has finished
    }

    // This block will be executed *after* all tasks in the group have completed
    group.notify(queue: .main) {
        print("Method 4: All tasks in the group have completed on main queue (Thread: \(Thread.current)).")
    }

    print("Method 4: Dispatch group setup completed on main thread. Main thread continues.")
}
dispatchEventMethod4()