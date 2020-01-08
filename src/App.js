import React from 'react';
import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';

function App() {
  return (
    <div className='container'>
      <Header />
      <Weather />
    </div>
  );
}

export default App;
