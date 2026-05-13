import { useState } from "react";
import { Link } from "react-router";

export default function UserAdd(){
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')

    const addUsers = async ()=>{
        console.log(name,age,email)
        const url = "http://localhost:3000/users"
        let response = await fetch(url,{
            method:'post',
            body:JSON.stringify({name,age,email})
            
        });
        response = response.json();

        if(response){
            alert("submitted");

        }
       


  
    }
    return(
        <div className="grid justify-center bg-amber-100">
<h1>This page for Adding Data</h1>
 <Link to="/" >Back</Link>

 <input className="border border-amber-500"  onChange={(event)=>setName(event.target.value)}type="text" placeholder="Enter Name"/>
 <br />
 <input className="border border-amber-500" onChange={(event)=>setAge(event.target.value)}type="text" placeholder="Enter Age" /><br />
 <input className="border border-amber-500" onChange={(event)=>setEmail(event.target.value)}type="text" placeholder="Enter Email" />
 <button className="border border-green-600 bg-amber-950 text-white" onClick={addUsers}>Add user</button>

        </div>
    )
}