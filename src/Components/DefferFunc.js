import React from "react";

function DefferFunc() {
    const greet = (name)=>{
        alert(`hello ${name}`)
    }
return (
    <>
    <button onClick = {()=>greet('varun')}>Greet</button>
    </>
)
}

export default DefferFunc