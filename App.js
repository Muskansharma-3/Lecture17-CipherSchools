import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {
  name = "Muskan"

  render() {
    return (
      <>
      <div>
        <h1>This is {this.name}!</h1>
      </div>
      <div>
        <p>This is paragraph and name is: {this.name}</p>
      </div>
      </>
    )
  }
}

// function App() {
//   const NAME = 'CipherSchools'
//   return (
//     <>
//     <div>
//       <h1 style={{
//         color: "red",
//         textAlign: "center",
//       }}>Hello from {NAME}!</h1>
//       </div>
//       <div>
//         <p>This is {NAME}</p>
//       </div>
//       </>

//   );
// }

export default App;
