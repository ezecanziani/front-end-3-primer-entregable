import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  if (input1.length < 3 || input1.startsWith(' ') || input2.length < 6) {
  setError('Por favor chequea que la información sea correcta');
  setSubmitted(false);
  } else {
  setError('');
  setSubmitted(true);
}
};

  return (
    <div className="App">
  <h1>Elige un color!</h1>
  <form onSubmit={handleSubmit}>
<div>
  <label htmlFor="input1">ingresa tu nombre</label>
<input
  type="text"
  id="input1"
  value={input1}
  onChange={(e) => setInput1(e.target.value)}
/>
  </div>
<div>
  <label htmlFor="input2">ingresa tu color favorito (formato HEX)</label>
  <input
  type="text"
  id="input2"
  value={input2}
  onChange={(e) => setInput2(e.target.value)}
/>
</div>
  <button type="submit">Enviar</button>
  </form>
  {error && <p style={{ color: 'red' }}>{error}</p>}
  {submitted && <Card input1={input1} input2={input2} />}
  </div>
);
}

export default App;