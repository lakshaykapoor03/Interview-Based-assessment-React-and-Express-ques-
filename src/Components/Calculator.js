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
      <h1>Calculator</h1>
      <div>
        <div>
          <div
            style={{
              backgroundColor: "aqua",
              padding: "4px",
              width: "300px",
              margin: "auto",
              height: "20px",
            }}
          >
            {value}
          </div>
        </div>
        <div>
          <div>
            <button onClick={() => calculatorInput("7")}>7</button>
            <button onClick={() => calculatorInput("8")}>8</button>
            <button onClick={() => calculatorInput("9")}>9</button>
            <button onClick={() => clearFunction()}>AC</button>
            <button onClick={() => removeLastValue()}>C</button>
          </div>
          <div>
            <button onClick={() => calculatorInput("4")}>4</button>
            <button onClick={() => calculatorInput("5")}>5</button>
            <button onClick={() => calculatorInput("6")}>6</button>
            <button onClick={() => calculatorInput("*")}>X</button>
          </div>
          <div>
            <button onClick={() => calculatorInput("1")}>1</button>
            <button onClick={() => calculatorInput("2")}>2</button>
            <button onClick={() => calculatorInput("3")}>3</button>
            <button onClick={() => calculatorInput("-")}>-</button>
          </div>
          <div>
            <button onClick={() => calculatorInput("0")}>0</button>
            <button onClick={() => calculatorInput(".")}>.</button>
            <button onClick={() => onCalculate()}>=</button>
            <button onClick={() => calculatorInput("+")}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
