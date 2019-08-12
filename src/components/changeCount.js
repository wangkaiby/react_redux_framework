import React, { useState, useContext } from "react";
import { reducerContext } from "./useReducer";
export default function ChangeCount() {
  const [inputValue, setInput] = useState("");
  const { state, dispatch } = useContext(reducerContext);
  const changeInput = e => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <>
      <input onChange={changeInput} value={inputValue} />
      <button
        onClick={() =>
          dispatch({ type: "set", payload: { count: inputValue } })
        }
      >
        {inputValue || "点击重新设置count值为Input框的值"}
      </button>
      <p>{state.count}</p>
    </>
  );
}
