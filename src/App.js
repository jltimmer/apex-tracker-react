import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import PlayerStats from './components/PlayerStats';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>Apex Tracker</h1>
      <Search setQuery={setQuery} />
      <PlayerStats query={query} />
    </div>
  );
}

export default App;
