import React from 'react';
import FetchAPI from './components/FetchAPI';
import './App.css'
import Quotes from './components/Quotes';


const App = () => {
  return (
    <div>   
      <div className="navbar">     
      <h1 className='titulo'>STAR WARS</h1>
      <h4>
        <Quotes/>
      </h4>
      </div>
      <FetchAPI /> 
     
    </div>
  );
};

export default App;
