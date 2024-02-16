import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Pokemon, Pokemons, Items, Item } from './pages';

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
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
