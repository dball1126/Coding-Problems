   // TabView {
//                  // First Tab
//                  Tab {
//                      Text("Content for Tab 1")
//                  } label: {
//                      Label("Tab 1", systemImage: "1.circle.fill")
//                          .foregroundColor(.black) // Set icon color to black
//                  }
//
//                  // Second Tab
//                  Tab {
//                      List {
//                          Text("Item 1")
//                          Text("Item 2")
//                          Text("Item 3")
//                      }
//                  } label: {
//                      Label("Tab 2", systemImage: "list.bullet")
//                          .foregroundColor(.black) // Set icon color to black
//                  }
//
//                  // Third Tab
//                  Tab {
//                      VStack {
//                          Image(systemName: "swift")
//                              .font(.largeTitle)
//                              .foregroundColor(.black) // Set icon color to black (for Image directly)
//                          Text("SwiftUI is awesome!")
//                      }
//                  } label: {
//                      Label("Swift", systemImage: "swift")
//                          .foregroundColor(.black) // Set icon color to black
//                  }
//              }
//              .accentColor(.black)