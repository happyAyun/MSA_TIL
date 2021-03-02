// 1. function : React Component
// function App() {
//   return (
//     <div>
//       <h1> Hello React !!! </h1>
//     </div>
//   );
// }

// export default App;

// 2. class : React Component
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "React";
    const type = "class";
    return (
      // JSX
      <div>
        <h1>
          Hello {name} Component - {type}
        </h1>
      </div>
    );
  }
}

export default App;
