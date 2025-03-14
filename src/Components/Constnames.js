import React from "react";

function Constnames() {
    const names = [
        {id:1,name:"usman",age:23},
        {id:2,name:"varun",age:24},
        {id:3,name:"alaka",age:22},
        {id:4,name:"jesna",age:26},
        {id:5,name:"arjun",age:28},
        {id:6,name:"kiran",age:18},

    ]
    const filterlist = names.filter(student=>(student.age<24))
return(
    <>
    <h1>Students List</h1>
    <ul>
        {names.map(student=>(
            <li key ={student.id}>
                <h3>Name: {student.name}</h3>
                <h4>age: {student.age}</h4>
            </li>
        ))}
    </ul>
    <h1>Students under  24 </h1>
    <ul>
        {filterlist.map(student=>(
            <li key={student.id}>
                <h3>{student.name}</h3>
                <h4>{student.age}</h4>
            </li>
        ))}
    </ul>
    
    </>
)
}
export default Constnames