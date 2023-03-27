import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputHandler, setInputHandler] = useState(0);
  const mathArr = [
    "Increment",
    "Decrement",
    "Add",
    "Subtract",
    "Multiply",
    "Divide",
    "Power",
    "Modulus",
  ];
  const counterFuncAdd = () => {
    setCounter(counter + 1);
  };
  const counterFuncSubtract = () => {
    setCounter(counter - 1);
  };
  const counterFuncParam = (type) => {
    type === "Add" && setCounter(counter + 1);
    type === "Subtract" && setCounter(counter - 1);
    type === "Divide" && setCounter(counter / 2);
    type === "Multiply" && setCounter(counter * 2);
  };
  // const counterFuncInput = (type) => {
  //   type === "Add" && setCounter(counter + inputHandler);
  //   type === "Subtract" && setCounter(counter - inputHandler);
  //   type === "Divide" && setCounter(counter / inputHandler);
  //   type === "Multiply" && setCounter(counter * inputHandler);
  // };
  const counterFuncInput = (type) => {
    switch (type) {
      case "Increment":
        setCounter(counter + 1);
        break;
      case "Decrement":
        setCounter(counter - 1);
        break;
      case "Add":
        setCounter(counter + inputHandler);
        break;
      case "Subtract":
        setCounter(counter - inputHandler);
        break;
      case "Divide":
        setCounter(counter / inputHandler);
        break;
      case "Multiply":
        setCounter(counter * inputHandler);
        break;
      case "Power":
        setCounter(counter ** inputHandler);
        break;
      case "Modulus":
        setCounter(counter % inputHandler);
        break;
      default:
        alert("not a math function");
        break;
    }
  };

  return (
    <div className='App App-header'>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(0)}>Reset</button>
      {/* <button onClick={counterFuncAdd}>Add 1</button>
      <button onClick={counterFuncSubtract}>Remove 1</button> */}
      <button onClick={() => counterFuncParam("Add")}>Add 1</button>
      <button onClick={() => counterFuncParam("Subtract")}>Remove 1</button>
      <button onClick={() => counterFuncParam("Divide")}>Divide by 2</button>
      <button onClick={() => counterFuncParam("Multiply")}>
        Multiply by 2
      </button>
      <p>
        -----------------------------------------------------------------------
      </p>
      <input
        type='number'
        onChange={(e) => setInputHandler(parseInt(e.target.value))}
        value={inputHandler}
      />
      {/* <button onClick={() => counterFuncInput("Add")}>
        Add {inputHandler}{" "}
      </button>
      <button onClick={() => counterFuncInput("Subtract")}>
        Remove {inputHandler}
      </button>
      <button onClick={() => counterFuncInput("Divide")}>
        Divide by {inputHandler}
      </button>
      <button onClick={() => counterFuncInput("Multiply")}>
        Multiply by {inputHandler}
      </button> */}
      {mathArr.map((expression) => {
        return (
          <button onClick={() => counterFuncInput(expression)}>
            {expression}
            {expression === "Increment"
              ? "++"
              : expression === "Decrement"
              ? "--"
              : " " + inputHandler}
          </button>
        );
      })}
    </div>
  );
}

export default App;