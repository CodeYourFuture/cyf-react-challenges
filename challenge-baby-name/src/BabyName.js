import React, { useState } from "react"


const BabyName = ({ names }) => {
    {names.sort((a, b) => a.name.localeCompare(b.name))}
    return (
        <div>
            <div><input type="text" placeholder="Enter name..." id="" /></div>
            <hr />
            <div className= "container">
                {names.map((name, index) => (
                <p key={index} className= {name.sex}>{(name.name)}</p> 
            ))}
            </div>      
        </div>
    )
}    

            
export default BabyName;