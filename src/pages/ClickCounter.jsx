import { useState } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Cliques: {count}</p>
        <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      </div>
    );
  }
  
  export default ClickCounter;
  