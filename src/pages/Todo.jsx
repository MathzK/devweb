import { useState } from 'react';

export default function TodoList() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  function adicionarTarefa() {
    if (!input.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      texto: input.trim(),
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput('');
  }

  function alternarConclusao(id) {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  }

  return (
    <div style={styles.container}>
      <h2>To-Do List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={adicionarTarefa} style={styles.addButton}>Adicionar</button>
      </div>

      <ul style={styles.lista}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} style={styles.item}>
            <span
              onClick={() => alternarConclusao(tarefa.id)}
              style={{
                ...styles.texto,
                textDecoration: tarefa.concluida ? 'line-through' : 'none',
                color: tarefa.concluida ? '#888' : '#000',
              }}
            >
              {tarefa.texto}
            </span>
            <button onClick={() => removerTarefa(tarefa.id)} style={styles.remover}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '2rem',
    backgroundColor: '#f1f8e9',
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '2rem auto',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  input: {
    padding: '0.5rem',
    width: '70%',
  },
  addButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  lista: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    borderBottom: '1px solid #ccc',
  },
  texto: {
    cursor: 'pointer',
    fontSize: '1rem',
  },
  remover: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.2rem',
  },
};
