import { useState } from "react";
import "./App.css";

import Nav from "./nav";
function App() {
  return (
    <div className="App" Suspense fallback={<h1>loading...</h1>}>
      <Nav />
    </div>
  );
}

export default App;
