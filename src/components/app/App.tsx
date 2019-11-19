import React from "react";
import { Trainingoptions } from "../trainingoptions";
import { Levelcarousel } from "../levelcarousel";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Trainingoptions />
      <Levelcarousel />
    </div>
  );
};

export default App;
