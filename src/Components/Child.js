import React from "react";


function Child(props) {
    return (
        <div>
        <h1>child list</h1>
        <h2 className="text-primary">info is Name:{props.name} , Age:{props.age}  </h2>
        <h2>sum is {props.num1+props.num2}</h2>
        </div>
    )
}

export default Child