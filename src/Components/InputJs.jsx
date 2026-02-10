import { useState } from "react";

function Input(){
    const[val,setVal] = useState("puneet Kumar       ")
    return(

        <>
        <input type="text" name=""  value={val} onChange={(event)=>{setVal(event.target.value)}}id="" />
        <button onClick={()=>{setVal("")}}>Clear</button>

        <p>
           {val} 
        </p>
        </>
    )
}
export default Input;