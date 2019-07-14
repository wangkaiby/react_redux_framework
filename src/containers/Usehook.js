import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  let [name, setName] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    setTimeout ( () => {console.log('dependence')},1000)
  },[count, name]);
  useEffect(() => {
    // Update the document title using the browser API
    console.log('no dependence')
  },[]); //pass null array used for lifcycle method, it just run once 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {setCount(count + 1);}}>
{count}      </button>
<button onClick={()=>setName(name=!name)}>{name?1:0}</button>
    </div>
  );
}
export default Example