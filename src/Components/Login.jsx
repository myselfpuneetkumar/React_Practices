import { useState } from "react"

function Login(){
    const[count, setCount] = useState(10)

    const scount =()=>{
        setCount(count+1)
        document.title = `count ${count}`
        // alert(`you have currently notificatrion are ${count}`)
        document.getElementById('#name').placeholder.inn = 'new'
    }
        const dcount =()=>{
        setCount(count-1)
        document.title = `count ${count}`
      
    }
    return(
       
        <>
        <p></p>
        <form action="" method="get">
            {count}
           name:
           <input type="text" name="name" id="name" style={{fontSize :count+'px'} } placeholder={`new size is ${count}`}/> 
           Email:
           <input type="mail" name="" id="" />
           <button>submit</button> 
            
            </form>
            <button onClick={scount} onDragCapture={dcount}>Increase Size{count}</button>        
            <button onClick={scount} onDragCapture={dcount}>Increase Size</button>        
        
        </>
    )
}
export default Login