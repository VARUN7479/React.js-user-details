import React from "react";

function Screen(props) {

   
    if (props.isLoggedIn){
        return <p>Logged in</p>
    }
    else {
        return <p>please Login</p>
    }
}

export default Screen