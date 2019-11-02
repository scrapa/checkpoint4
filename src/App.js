import React from "react";
import "./App.css";
import Greet from "./name.js";
import Job from "./job.js";
function App() {
  return (
    <div>
      <img src="https://i2.wp.com/www.immobilier-meuble.fr/wp-content/uploads/2018/07/Arnold_Schwarzenegger_1974.jpg?resize=362%2C300&ssl=1" />
      <Greet name="adam" />
      <Job job="hajjem" />
    </div>
  );
}

export default App;
