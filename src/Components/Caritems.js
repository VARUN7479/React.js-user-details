import React from "react";

function Caritem(props) {
    return(
        <>
    <li className="carlist" onClick={props.onclick} >i am {props.brand}</li>
    </>
    )
}

export default Caritem