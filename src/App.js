import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [open, setOpen] = useState(false)

  function toggleOpen() {
    setTimeout(() => {}, 1500)
    setOpen(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={toggleOpen}>Click Me</button>
        {open && <p>The text is Visible</p>}
      </header>
    </div>
  );
}

export default App;
