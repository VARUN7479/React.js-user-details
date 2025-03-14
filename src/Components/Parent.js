import React from "react";
import Child from "./Child"

function Parent() {
    return (
        <div>
        <h1>Parent list</h1>
        <Child name = {"Varun"}  age = {24} num1 = {4} num2 = {3}/>
        </div>
    )
}

export default Parent