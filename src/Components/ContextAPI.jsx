import { useState } from "react";

import College from "../Context_data/College";
import { SubjectContext } from "../Context_data/ContextData";


export default function ContextAPI(){
    const[subject,setSubject] = useState('');
    return(
        <div style={{backgroundColor:'yellow',padding:'10px', width:'100vw'}}>
            <SubjectContext.Provider value={subject}>
            <h1>Context API</h1>
            <select value={subject} name="" id="" onChange={(event)=>setSubject(event.target.value)}>
                <option value="">Select</option>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
                <option value="Maths">Maths</option>
                 
            </select>
            <button onClick={()=>setSubject('')}>Clear Subject</button>
            <College />
            </SubjectContext.Provider>
            
        </div>
    )
}