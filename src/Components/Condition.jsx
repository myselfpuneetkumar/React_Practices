import { useState ,useEffect} from "react"
function Conditional(){
    let name = true
    let [confirmColor,setConfirmcolor] = useState(0)
    useEffect(()=>{

  
    if(confirmColor==1){
        document.body.style.backgroundColor = "violet"
    }
    else if(confirmColor==2){
        document.body.style.backgroundColor = "grey"
    }
    else if(confirmColor==3){
        document.body.style.backgroundColor = "red"
    }
    else if(confirmColor==4){
        document.body.style.backgroundColor = "green"
    }
    else if(confirmColor==5){
        document.body.style.backgroundColor = "yellow"
    }
    else{
        document.body.style.backgroundColor = "white"
       
    }
      },[confirmColor]);


      const color = ()=>{
        confirmColor>5?confirmColor = 0:setConfirmcolor(confirmColor+1)
                }
                let colorr = document.body.style.backgroundColor
    return(
        <div>
            <h1>{name?"buggu":"Name not Found"}</h1>
            <button onClick={color}>Change Color</button>

            <button onClick={()=>{
                document.body.style.backgroundColor = prompt("Enter Color")
            }}>Manually Change the Color</button>{colorr}
        </div>
    )
}
export default Conditional