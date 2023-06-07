
import { useState } from 'react';
import './App.css';
import ThemeToggler from './Components/ThemeToggler';
import themeContext from './Utils/ThemeContext';
import Counter from './Components/Counter';
import Calculator from './Components/Calculator';
import TicTacToe from './Components/TicTacToe';

function App() {

  const themeHook = useState("dark")
  return (
    <themeContext.Provider value={themeHook}>
    <div className="App">
     <ThemeToggler/>
    <Counter/>
    <Calculator/>
    <TicTacToe/>
    
        </div>
    </themeContext.Provider>   
  );
}

export default App;
