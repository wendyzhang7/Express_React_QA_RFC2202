import React from "react";
import reactDOM from "react-dom";

import StockList from "./StockList.js";

const App = () => {
  return <div className="App">
    <StockList />
  </div>
}

reactDOM.render(<App />, document.getElementById("root"));