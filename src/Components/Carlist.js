import React from "react";
import Caritem from "./Caritems";

function Carlist() {

   const cars = [
    {id : 1 , brand : "Ford" },
    {id : 2 , brand : "BMW" },
    {id:3 , brand : "Audi" }
   ] 

   const filtercar = cars.filter((car)=>(car.brand === "BMW"))

   function handleClicked(brandname){
    alert(`the car ${brandname} is clicked`)
   }

   return (
    <>
    <h1>Car List</h1>
    <ul>
        {cars.map((car)=>(
            <li key = {car.id} >{car.brand}</li>
        ))}
    </ul>
    <h1>Filtered List</h1>
    <ul>
        {filtercar.map((car)=>(
            <li key = {car.id}>{car.brand}</li>
        ))}
    </ul>
    <h1>Click on Cars</h1>
    <ul>
        {cars.map(car=>(<Caritem key={car.id} brand={car.brand} onclick= {()=>handleClicked(car.brand)}/>))}
    </ul>

  
    </>
   )


}
export default Carlist