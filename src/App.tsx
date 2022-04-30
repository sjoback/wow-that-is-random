import React from 'react';
import Result from './components/Result/Result';
import './styles/globals.scss'

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Random me!" />
        <Result type="recipe" />
      </form>
    </main>
    
  );
}

export default App;
