import React, { Component } from "react";
import Header from "./Bootstrap/Header";

// const ArrowHeader = props => {
//   return (
//     <>
//       <p>
//         Hello, I am from arrow function, and we have {props.Name} in the Live
//         Stream.
//       </p>
//       <pre>{JSON.stringify(props, null, 2)}</pre>
//     </>
//   );
// };
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>Portfolio Generator</Header>
        {/* <h1>Hello Scaler</h1> */}
        {/* <ArrowHeader Hello="World" Name="Ichchha Gupta"></ArrowHeader> */}
      </div>
    );
  }
}

export default App;
