import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
// import About from './components/About.js';
import TextForm from './components/TextFrom.js';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'dark') {
      document.body.style.backgroundColor= 'white';
      setMode('white');
    }else {
      document.body.style.backgroundColor='#1b0262';
      setMode('dark');
    }
  }
  return (
    <React.StrictMode>
      <Navbar title={'TextUtils'} toggleMode={toggleMode} mode={mode} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to anaylize" mode={mode}/>
        {/* <About /> */}
      </div>
    </React.StrictMode>
  );
}

export default App;
