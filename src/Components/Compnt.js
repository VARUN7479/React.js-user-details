import React from "react";

function Compnt(props){
    function Admin(){
        return <p>Admin already logged in</p>
    }
    function Login(){
        return <p>Please login</p>
    }
    const value = props.isLoggedIn
    let result;

    // if (value) {
    //     return <Admin/>
    // }
    // else {
    //     return <Login/>
    // } 
     //or
     if (value) {
        result = <Admin/>
     }
     else {
        result =<Login/>
     }
     return (
        <>
         {result}
        </>
     )
}

export default Compnt;