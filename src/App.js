import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const[name, setname]=useState("");
  const[darkMode, SetDarkMode]=useState(false);

  return (
    <>
    <center>
    <div className={darkMode?"container dark":"container"}>
    <h1>Welcome to Student Dashboard</h1>
      <input type="text"
    placeholder="Enter your name"
    className="name-input"
    value={name}
    onChange={(e) => setname(e.target.value)}
    ></input>

    <p>Hello, {name}</p><button className="toggle-btn" onClick={()=>SetDarkMode(!darkMode)}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
    </center>
    </>
  );
}

export default App;
