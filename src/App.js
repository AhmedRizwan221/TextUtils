import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
// import About from './components/About.js';
import TextForm from './components/TextFrom.js';
function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if(mode === 'dark') {
      setMode('white');
    }else {
      setMode('dark');
    }
  }
  return (
    <React.StrictMode>
      <Navbar title={'TextUtils'} toggleMode={toggleMode} mode={mode} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to anaylize" />
        {/* <About /> */}
      </div>
    </React.StrictMode>
  );
}

export default App;
