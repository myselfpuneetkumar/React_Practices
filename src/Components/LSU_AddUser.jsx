function AddUser({setUser}) { 
   
    return(
        <div>
           <h1>Add User</h1>
            <input type="text" onChange={(event)=>setUser(event.target.value)} name="" id="" />
            <hr />
        </div> 
    ) 
} 
export default AddUser;
