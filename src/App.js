import headshot from './headshot.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headshot-container">
        <a href="https://www.linkedin.com/in/simei-yeh/"
          target="_blank"
          rel="noreferrer">
          <img src={headshot}
            className="headshot"
            alt="logo" />
        </a>
        </div>
        <p>

        </p>
        <a
          href="Simei_Yeh_Resume.pdf"
        >
          Resume
        </a>
      </header>
    </div>
  );
}

export default App;
