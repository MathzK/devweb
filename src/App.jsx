import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Todo from './pages/Todo';
import ClickCounter from './pages/ClickCounter';
import TicTacToe from './pages/TicTacToe';
import Calculator from './pages/Calculator';
import CepSearch from './pages/CepSearch';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/contador" element={<ClickCounter />} />
        <Route path="/jogo-da-velha" element={<TicTacToe />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/buscador-cep" element={<CepSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
