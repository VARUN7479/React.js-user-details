import React from "react";

function Event() {
        let count = 0;
        const increment = ()=>{
          count++
          console.log(`count:${count}`);
          
        }
        return (
            <div>
              <p>count = {count}</p>
              <button onClick = {increment}>Click</button>
            </div>
          );
    
    
}

export default Event