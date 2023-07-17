import React from 'react';
import FetchAPI from './components/FetchAPI';
import './App.css'

const App = () => {
  return (
    <div>
      <h1 className='titulo'>Filmes de Star Wars</h1>
     <FetchAPI /> 
    </div>
  );
};

export default App;
