import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

 function UserEdit(){
    const{id} = useParams();
    const navigate = useNavigate();
    const[name,setName] = useState('')
    const[age,setAge] = useState('')
    const[email,setEmail] = useState('')

    useEffect(()=>{
        getUserData();
    },[])
    const url = "http://localhost:3000/users/" + id;

    const getUserData = async ()=>{
        console.log(id);
        let response =await fetch(url);
        response = await response.json();
        console.log(response);
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)

        

    }
    const updateUser = async ()=>{
        let response =await fetch(url,{
            method:'put',
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        if(response){
            alert('Updated Data')

        }
        

        await navigate('/data')
    }
        return(
        <div>
            <h1>This Page for Edit User Data</h1>
            <input type="text" placeholder="Enter Name"  value={name} onChange={(event)=>setName(event.target.value)}/><br />
            <input type="text" placeholder="Enter Age" value={age} onChange={(event)=>setAge(event.target.value)} /> 
            <br />
            <input type="text" placeholder="Enter Email" value={email} onChange={(event)=>setEmail(event.target.value) }/>
            <button onClick={updateUser}>Update User</button>
            <p>the data which is already filled is called as populate</p>
        </div>
    )
}
export default UserEdit ;