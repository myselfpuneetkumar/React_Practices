import { useState } from "react";
import './Form.css'

function Form_Validation (){
    const[name,setName] = useState();
    const[errName,setErrName] = useState();
    const handleName = (event)=>{
        console.log(event.target.value)
        if(event.target.value.length >5){
            console.log("please enter less numbers")
            setErrName('please enter less than 5 numbers')
        }
        else{
            console.log('no error')
                        setErrName('')

        }

    }
    return(
        <div>
            <input type="text" className={errName?'error':''} onChange={handleName} placeholder="Enter Name" /> <span>{errName && errName   }

            </span>
            <br />
           
            <input type="password" placeholder="Enter Password" />
        </div>
    )
}
export default Form_Validation ;