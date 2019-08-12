import React, { useEffect, useState } from 'react';

function App() {
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <div>
            <p>当前窗口宽度是：{width}</p>
        </div>
    )
}

export default App