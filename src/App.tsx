import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [coords, setCoords] =useState({});

  const handleClickButton =()=>{
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) => {

        setCoords(position.coords)
        alert('성공')
      })
    }else{
      alert('실패')
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClickButton}>
          get Geolocation
        </button>
      </header>
    </div>
  );
}

export default App;
