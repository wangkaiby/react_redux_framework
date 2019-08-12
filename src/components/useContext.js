import React, { useContext } from 'react';

// import "./styles.css";
const ColorContext = React.createContext("green");

function Button(props) {
  return (
    <ColorContext.Consumer>
      {color => (
        <button style={{ background: color }}>{(color, props.children)}</button>
      )}
    </ColorContext.Consumer>
  );
}

function Button2(props) {
  const color = useContext(ColorContext);
  return (
    <button style={{ background: color }}>{color}{props.children}</button>
  );
}

function MiddleWare(props) {
  return props.select === 1 ? (
    <ColorContext.Provider value="yellow">
      <Button2>指定provider</Button2>
    </ColorContext.Provider>
  ) : (
    <Button>我来了</Button>
  );
}

function App() {
  return (
    <div>
      <ColorContext.Provider value="yellow">
        <MiddleWare />
      </ColorContext.Provider>
    </div>
  );
}

function App2() {
  return (
    <div>
      <MiddleWare select={1} />
      <ColorContext.Provider value="yellow">
        <Button2>指定provider</Button2>
      </ColorContext.Provider>
      <Button2>没有指定provider</Button2>
    </div>
  );
}
// export default App
export default App2