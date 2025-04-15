import { useState } from 'react';

export default function CepSearch() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');

  const buscarCep = async () => {
    if (cep.length !== 8) {
      setErro('O CEP deve ter 8 dígitos.');
      setDados(null);
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErro('CEP não encontrado.');
        setDados(null);
      } else {
        setDados(data);
        setErro('');
      }
    } catch (error) {
      setErro('Erro ao buscar o CEP.');
      setDados(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Buscador de CEP</h2>
      <input
        type="text"
        placeholder="Digite o CEP (apenas números)"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        style={styles.input}
      />
      <button onClick={buscarCep} style={styles.button}>Buscar</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {dados && (
        <div style={styles.result}>
          <p><strong>Logradouro:</strong> {dados.logradouro}</p>
          <p><strong>Bairro:</strong> {dados.bairro}</p>
          <p><strong>Cidade:</strong> {dados.localidade}</p>
          <p><strong>Estado:</strong> {dados.uf}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#e0f7fa',
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '2rem',
    textAlign: 'center',
  },
  input: {
    padding: '0.5rem',
    width: '80%',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    marginBottom: '1rem',
    backgroundColor: '#00796b',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '1rem',
    textAlign: 'left',
  }
};
