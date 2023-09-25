import logo from "./logo.svg";
import design from "./design/desktop-design.jpg";
// import design from "./design/mobile-design.jpg";

import "./mfa.css";
import { Advices } from "./AdvicesMFA";

function App() {
  return (
    <div
      className="App"
      style={
        {
          // backgroundImage: `url(${design})`,
          // backgroundSize: "100%",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "top",
          // height: "100vh",
          // width: "100%",
        }
      }
    >
      <Advices />
    </div>
  );
}

export default App;
