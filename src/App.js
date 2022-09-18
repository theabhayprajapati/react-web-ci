import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://abhayprajapati.me"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
          Learn Testing and Dev
        </a>
      </header>
    </div>
  );
}

export default App;
