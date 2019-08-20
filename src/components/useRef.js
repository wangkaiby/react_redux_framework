import React, { useRef, useEffect } from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

function useOutsideClick(ref, fnc) {
  useEffect(() => {
    const handleClickOutside = e => {
      if (e.target !== ref.current && !ref.current.contains(e.target)) {
        fnc();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [ref, fnc]);
}

function App() {
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    console.log(ref, "OUTSIDE CLICKED");
  });

  return (
    <div
      style={{
        backgroundColor: "black"
      }}
    >
      <div
        ref={ref}
        style={{
          width: 200,
          height: 200,
          background: "red"
        }}
      />
    </div>
  );
}

export default App