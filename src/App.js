import './App.css';
import {useState, useEffect } from "react";
import CalcWrapper from "./components/CalcWrapper.js";

function App() {
  const [result, setResult] = useState("");

  function handleButtonClick(e){

    setResult(result + e.target.value)
  }

  function handleEqualBtnClick(){
    
    const totalResult = eval(result)

    setResult(totalResult)
  }

  function handleClearBtnClick(){
    setResult("")
  }


  return (
    <main className="container">
      <CalcWrapper result={result} onButtonClick={handleButtonClick} onEqualBtnClick={handleEqualBtnClick} onClearBtnClick={handleClearBtnClick} />
    </main>
  )
}

export default App;
