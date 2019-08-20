import React, { useReducer } from "react";
// import ReactDOM from "react-dom";
import { reducer, init } from "./count.reducer";
// import "./styles.css";
import ChangeCount from "./changeCount";
import { Link, Route, BrowserRouter } from "react-router-dom";
// const initialCount = { count: 0 };
const reducerContext = React.createContext();
export { reducerContext };

function App() {
  const [state, dispatch] = useReducer(reducer, 0, init);
  return (
    <div className="App">
      <>
        {/* <BrowserRouter>
          <Route>
            <Link to="www.baidu.com" />
          </Route>
        </BrowserRouter> */}
        <button>跳转</button>
        Count: {state.count}
        <button
          onClick={() => dispatch({ type: "reset", payload: { count: 0 } })}
        >
          Reset
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <reducerContext.Provider value={{ state, dispatch }}>
          <ChangeCount />
        </reducerContext.Provider>
      </>
    </div>
  );
}

export default App