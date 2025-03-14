import React from "react";

function Conditional(props) {
    return(
    <>
    {props.isLogged && <p>already logged in</p>}
    {!props.isLogged && <p>please login first</p>}
    {props.isLoggedin ? <p>admin logged in already</p> : <p>Login first Please!!</p>}
    </>
    )
}


export default Conditional