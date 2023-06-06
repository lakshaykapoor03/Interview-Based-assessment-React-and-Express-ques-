import React from "react";
import { useState } from "react";


const Calculator = () => {
  const [value, setInputValue] = useState("");

  const calculatorInput = (val) => {
    setInputValue(value + val);
  };

  const onCalculate = () => {
    let total = value;

    setInputValue(eval(total).toString());
  };

  const clearFunction = () => {
    setInputValue("");
  };
  console.log(typeof(value))

  const removeLastValue = () => {
    
    setInputValue(value.substring(0, value.length-1));
  };
  return (
    <div>
      <h1>Question 13 - Calculator Using React Only</h1>
      <div className="calcultor-container">
    
        <div className="calculator-input">
            {value}
          </div>
          <div className="calculator-row">
            <button className="calculator-btn" onClick={() => calculatorInput("7")}>7</button>
            <button className="calculator-btn" onClick={() => calculatorInput("8")}>8</button>
            <button className="calculator-btn" onClick={() => calculatorInput("9")}>9</button>
            <button className="calculator-btn" onClick={() => calculatorInput("/")}>/</button>
          </div>
          <div className="calculator-row">
            <button className="calculator-btn"  onClick={() => calculatorInput("4")}>4</button>
            <button className="calculator-btn" onClick={() => calculatorInput("5")}>5</button>
            <button className="calculator-btn" onClick={() => calculatorInput("6")}>6</button>
            <button className="calculator-btn" onClick={() => calculatorInput("*")}>X</button>
          </div>
          <div className="calculator-row">
            <button className="calculator-btn" onClick={() => calculatorInput("1")}>1</button>
            <button className="calculator-btn" onClick={() => calculatorInput("2")}>2</button>
            <button className="calculator-btn" onClick={() => calculatorInput("3")}>3</button>
            <button className="calculator-btn" onClick={() => calculatorInput("-")}>-</button>
          </div>
          <div className="calculator-row">
            <button className="calculator-btn" onClick={() => calculatorInput("0")}>0</button>
            <button className="calculator-btn" onClick={() => calculatorInput(".")}>.</button>
            <button className="calculator-btn" onClick={() => calculatorInput("+")}>+</button>
            <button className="calculator-btn" onClick={() => removeLastValue()}>C</button>

          </div>
          <div className="calculator-row">
            <button className="calculator-btn2" onClick={() => onCalculate()}>=</button>
            <button className="calculator-btn2" onClick={() => clearFunction()}>AC</button>

          

          </div>
       
      </div>
    </div>
  );
};

export default Calculator;
