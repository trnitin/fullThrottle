import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './container/Main/Main'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Main style={{ marginTop: '30px' }} />
    </div>
  );
}

export default App;
