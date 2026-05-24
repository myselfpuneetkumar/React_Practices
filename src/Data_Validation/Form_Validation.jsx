import { useState } from "react";
import './Form.css'

function Form_Validation (){
    const[name,setName] = useState();
    const[nameErr,setNameErr] = useState();
    const[password,setPassword] = useState();
    const[passwordErr,setPasswordErr] = useState();
    const handleName = (event)=>{
        console.log(event.target.value)
        if(event.target.value.length >5){
            console.log("please enter less numbers")
           setNameErr('please enter less than 5 numbers')
        }
        else{
            // console.log('no error')
                        setNameErr()

        }

    }
    const handlePassword= (event)=>{
        let regex = /[^A-Z0-9]/i;
        if (regex.test(event.target.value)){
            
            setPasswordErr('Only Numbers And Alphabet are Allowed')
            console.log(passwordErr)
        }
        else{
            setPasswordErr('')

        }

    }
    return(
        <div>
            <input type="text" className={nameErr?'error':''} onChange={handleName} placeholder="Enter Name" />
            <span style={{margin:'8px', color:'red'}}>{ nameErr }</span> 

            <br />
            <br />
            <br />
            <br />
           
            <input type="text" className={passwordErr?'error':''} onChange={handlePassword} placeholder="Enter Password" />
            <span style={{margin:'8px', color:'red'}}>{ passwordErr }</span> 
            <br />
            <button disabled={nameErr || passwordErr}>Submit</button>
        </div>
    )
}
export default Form_Validation ;