import React from "react";

function Even(props) {
    let res = true
    if (props.num%2==0) {
        // return <p>The Number is even</p>
    }
    else {
        // return <p>The number is odd</p> 
        res =false
    }
    return (
        <>
        {res ? <p>The number is even!!</p>:<p>the number is odd!!</p>}
        </>
    )
}    

 export default Even