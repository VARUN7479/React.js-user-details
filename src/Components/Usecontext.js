import React, { createContext, useContext, useState } from 'react'

const usercontext = createContext();

function Usecontext() {
    const [user,setuser] = useState("Bruno")
    const [place,setplace] =useState("Portugal")
  return (
    <div>
    <usercontext.Provider value={{user,place}} >
      <h1 className='text-danger'>{`Goat!!${user}`}</h1>
      <Parent/>
    </usercontext.Provider>
    </div>
  )
}

function Parent() {
    return(
        <>
        <h1 className='text-danger'>Manchester United</h1>
        <Child/>
        </>
    )
}

function Child() {
    const {user, place} = useContext(usercontext)
    return(
        <>
        <h1 className='text-danger'>Midfielder {user} from {place}</h1>
        </>
    )
}

export default Usecontext
