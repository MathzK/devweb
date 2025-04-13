import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: '10px', background: '#eee' }}>
      <Link to="/">To-Do List</Link> |{' '}
      <Link to="/contador">Contador de Cliques</Link> |{' '}
      <Link to="/jogo-da-velha">Jogo da Velha</Link> |{' '}
      <Link to="/calculadora">Calculadora</Link> |{' '}
      <Link to="/buscador-cep">Buscador de CEP</Link>
    </nav>
  );
}

export default Header;
