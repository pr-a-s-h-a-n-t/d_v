import { useState } from 'react'
import { Suspense } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./components/common/Table/Table";
import Nav from "./nav";
function App() {
  const [input, setInput] = useState(0);

  return (
    <div
      // write suspense code
      className="App"
      Suspense
      fallback={<h1>loading...</h1>}
    >
      <Nav />
    </div>
  );
}

export default App
