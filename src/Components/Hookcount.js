import React, { useState } from "react";

function Hookcount() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    const [item, setItem] = useState([])

    function increment() {
        setCount(count+1)

    }
    function decrement() {
        if (count>0) {
            setCount(count-1)
        }
    }

    // function handlechange(event) {
    //     event.preventDefault();
    //     setInput(event.target.value)
    // }

    function handleItems(){
        const newitem = `item${item.length+1}`
        setItem([...item,newitem])
    }

    return (
        <>
        <h1>Hook list</h1>
        <p>count:{count}</p>
        <button onClick={increment}>Increment</button>
        <br/><br/>
        <button onClick={decrement}>Decrement</button>
        <br/><br/>

        <input 
        type="text" 
        placeholder="enter your name" 
        value ={input}
        onChange =  {(event)=>{
            event.preventDefault()
            setInput(event.target.value)
        }}/>
        <br/><br/>

        <p>the name is: {input}</p>

        <br/><br/>

        <button onClick={handleItems}>add items</button>
        <br></br>
        <ul>
            {item.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>




        </>
    )
}

export default Hookcount