import React from "react";
import { useNavigate } from "react-router-dom";

function Contacts (){
    
    const navigate = useNavigate();
    return(
        <>
        <h1 className="text-center display-4">Contacts</h1>
        <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-success me-2" onClick={()=>navigate('/')} >Home</button>
        <button class="btn btn-outline-success me-2" onClick={()=>navigate('/about')} >About</button>
        </form>   
        </nav>
        </>
    )
}

export default Contacts