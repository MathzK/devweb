import { useState } from 'react';

export default function ClickCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Contador de Cliques</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
