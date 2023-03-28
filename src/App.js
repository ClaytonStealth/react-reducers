import React, { useState, useReducer } from "react";
import "./App.css";
import counterReducer from "./reducers/counterReducer";

function App() {
  const initialCounter = 0;
  const [counter, dispatch] = useReducer(counterReducer, initialCounter);

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
    "SQ Root",
  ];
  
 
  

  return (
    <div className='App App-header'>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        Reset
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "Ultimate Answer",
          })
        }
      >
        Ultimate Answer
      </button>
      
      <p>
        -----------------------------------------------------------------------
      </p>
      <input
        type='number'
        onChange={(e) => setInputHandler(parseInt(e.target.value))}
        value={inputHandler}
      />
      
      {mathArr.map((expression) => {
        return (
          <button
            onClick={() =>
              dispatch({
                type: expression,
                inputHandler: inputHandler,
              })
            }
          >
            {expression}
            {expression === "Increment"
              ? "++"
              : expression === "Decrement"
              ? "--"
              : expression === "SQ Root"
              ? " "
              : " " + inputHandler}
          </button>
        );
      })}
      <br />
    </div>
  );
}

export default App;
