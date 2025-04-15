import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Por favor, insira números válidos.');
      return;
    }

    let res = 0;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Divisão por zero!';
        break;
      default:
        res = 'Operação inválida';
    }
    setResult(res);
  };

  return (
    <div style={styles.container}>
      <h2>Calculadora</h2>
      <input
        type="number"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <input
        type="number"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button onClick={() => handleCalculation('+')}>+</button>
        <button onClick={() => handleCalculation('-')}>−</button>
        <button onClick={() => handleCalculation('*')}>×</button>
        <button onClick={() => handleCalculation('/')}>÷</button>
      </div>

      {result !== null && (
        <p style={styles.result}>Resultado: {result}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f2f2f2',
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '2rem',
    textAlign: 'center',
  },
  input: {
    padding: '0.5rem',
    margin: '0.5rem',
    width: '80%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '1rem',
  },
  result: {
    marginTop: '1rem',
    fontWeight: 'bold',
  },
};
