// swift-tools-version:5.5
import PackageDescription

let package = Package(
    name: "MyTopKFrequentProject", // This is your project/package name
    dependencies: [
        // Add the swift-collections dependency here
        .package(url: "https://github.com/apple/swift-collections.git", .upToNextMajor(from: "1.2.0"))
    ],
    targets: [
        // Define your executable target
        .executableTarget(
            name: "MyTopKFrequentProject", // This should match the directory name in Sources/
            dependencies: [
                // Link the HeapModule product to your executable target
                .product(name: "HeapModule", package: "swift-collections")
            ]
            // The 'path' property has been removed as it's redundant for the default source location.
            // Ensure your .swift files (like main.swift and Solution.swift) are directly inside
            // the 'Sources/MyTopKFrequentProject/' directory.
        )
    ]
)
