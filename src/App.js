import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextFrom.js';
function App() {
  return (
    <React.StrictMode>
      <Navbar title={'TextUtils'} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to anaylize" />
      </div>
    </React.StrictMode>
  );
}

export default App;
