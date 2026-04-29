import { useState } from "react";

function UpdatingObject() {
    const [obj,setObj] = useState({
        name: 'aditya',
       address: {
        city:"ghaziabad",
        country:"india"
       }
    })
    const handleObject = (val)=>{
        obj.name = val
        console.log('name',obj);
        setObj({...obj})

    }
    const handleCity = (city)=>{
        console.log('CITY',city)
        obj.address.city = city
        setObj({...obj,address:{...obj.address,city}})
    }
    return (
        <>
            <h1>Name{obj.name}</h1>
            <h1>City{obj.address.city}</h1>
            <h1>Country{obj.address.country}</h1>

            <h1>Updating Objects</h1>
            Name<input type="text" onChange={(event)=>handleObject(event.target.value)} />
            City<input type="text" onChange={(event)=>handleCity(event.target.value)} />


        </>
    )
}
export default UpdatingObject;