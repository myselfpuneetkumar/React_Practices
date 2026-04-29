import AddUser from "./LSU_AddUser";
import DisplayUser from "./LSU_DisplayUser";
import { useState } from "react";

function LiftingStateUp(){
     const[user,setUser] = useState('')
    return(
        <>
        <AddUser setUser={setUser} />
       
        <DisplayUser user = {user} />
        </>
    )
}
export default LiftingStateUp ;