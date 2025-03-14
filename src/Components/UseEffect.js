import React, { useEffect, useState } from "react";

function UseEffect() {
    const [count,setCount] = useState(0)
    const  [calc,setCalc] = useState(0)

    useEffect(()=>{
        
        setCalc(count*2)
    },[count])

    function handleClick() {
        setCount(count+1)

    }

    return (
        <>
        <h3>Count:{count}</h3>
        <br></br>
        <button onClick={handleClick}>Click</button>
        <h3>Calculation:{calc}</h3>
        </>

    )
}

export default UseEffect;