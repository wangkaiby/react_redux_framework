import React, { useEffect, useState } from 'react';

// const init = someExpensiveComputation(props);
// return init;


function Example() {
    const someExpensiveComputation = (init) => {
        return init + 3
    }
    const [countObj, setCountObj] = useState({obj: 30})
    const [count, setCount] = useState(() =>  {
    const initialState = someExpensiveComputation(3);
        return initialState;
    });

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
    },[]); 
    //pass null array used for lifcycle method, it just run once 

    const setcountfn = () => {
        setCount(count => count - 1)
    }

    const setcountobj= (num) => {
        setCountObj({obj:num})
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={setcountobj}>
                {countObj.obj}
            </button>  
            <button onClick={setcountfn}>
                {count}
            </button>
            <button onClick={()=>setName(name=!name)}>
                {name?1:0}
            </button>
        </div>
    );
}

export default Example
