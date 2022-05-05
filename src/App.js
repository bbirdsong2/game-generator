import logo from './logo.svg';
import './App.css';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome {name}...
        </p>
        <p>Your game is coming soon</p>
      </header>
    </div>
  );
}

export default App;
