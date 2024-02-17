import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Pokemon, Pokemons, Items, Item, GuessPokemon, Login } from './pages';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/pokemons/:name" element={<Pokemon />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:name" element={<Item />} />
          <Route path="/guess-the-pokemon" element={<GuessPokemon />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
