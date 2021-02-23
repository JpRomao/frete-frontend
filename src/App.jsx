import React from 'react';
import axios from 'axios';

import Input from './components/Input';
import Select from './components/Select';

import './assets/styles/global.css';

function App() {
  async function handleCalculate(e) {
    e.preventDefault();

    const response = await axios.get('https://frete-ba.herokuapp.com:3333/frete');
    const data = response.data;

    console.log(data);
  }

  return (
    <div className="App">
      <div className="cep-form">
        <form onSubmit={handleCalculate}>
          <Input
            label="CEP"
            id="cep"
            type="number"
          />
          <Select
            label="tipo"
            type="number"
          />

          <button type="submit">
            Calcular
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
